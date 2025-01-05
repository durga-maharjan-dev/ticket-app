package com.maharjanworks.ticket.controller;

import com.maharjanworks.ticket.dto.AppDTO;
import com.maharjanworks.ticket.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AppDTO> register(@RequestBody AppDTO request){
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AppDTO> login(@RequestBody AppDTO request){
        return ResponseEntity.ok(authService.login(request));
    }
}
