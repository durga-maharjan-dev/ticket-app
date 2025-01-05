package com.maharjanworks.ticket.service;

import com.maharjanworks.ticket.config.CustomAuthenticationManager;
import com.maharjanworks.ticket.dto.AppDTO;
import com.maharjanworks.ticket.jwt.JwtUtils;
import com.maharjanworks.ticket.model.Role;
import com.maharjanworks.ticket.model.User;
import com.maharjanworks.ticket.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class AuthService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
//    private AuthenticationManager authenticationManager;
    private CustomAuthenticationManager authenticationManager;

    @Autowired
    private JwtUtils jwtUtils;

    public AppDTO register(AppDTO request){
        AppDTO response = new AppDTO();
        try{
            User user = new User();
            user.setFirstName(request.getFirstName());
            user.setLastName(request.getLastName());
            user.setEmail(request.getEmail());
            user.setUsername(request.getUsername());
            user.setPassword(passwordEncoder.encode(request.getPassword()));
            user.setRole(request.getRole());
            User savedUser = userRepository.save(user);
            if (savedUser != null){
                response.setUser(savedUser);
                response.setMessage("user register - success");
                response.setStatusCode(200);
            }
        }catch (Exception ex){
            response.setStatusCode(500);
            response.setError("Error occurred: "+ ex.getMessage());
        }
        return response;
    }


    public AppDTO login(AppDTO request) {
        AppDTO response = new AppDTO();
        try{
            authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
            User validUser = userRepository.findByUsername(request.getUsername())
                    .orElseThrow(() -> new UsernameNotFoundException("Invalid username"));
            //if username and password is valid, generate token
            String jwt = jwtUtils.generateToken(validUser);
            String refreshToken = jwtUtils.generateRefreshToken(new HashMap<>(), validUser);
            //setting up response
            response.setStatusCode(200);
            response.setMessage("Authentication success");
            response.setToken(jwt);
            response.setRefreshToken(refreshToken);
            response.setRole(Role.valueOf(jwtUtils.extractRole(jwt)));
            response.setExpirationTime("24hrs");
        }catch(Exception ex){
            response.setStatusCode(500);
            response.setError("Error occurred: " + ex.getClass().getSimpleName() + " - " +ex.getMessage());
        }
        return response;
    }
}
