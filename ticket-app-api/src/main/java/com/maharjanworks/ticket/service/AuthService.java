package com.maharjanworks.ticket.service;

import com.maharjanworks.ticket.dto.AppDTO;
import com.maharjanworks.ticket.model.User;
import com.maharjanworks.ticket.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

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





}
