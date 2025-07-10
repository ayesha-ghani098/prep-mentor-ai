package com.prepmentor.backend.controller;

import com.prepmentor.backend.config.JwtUtil;
import com.prepmentor.backend.dto.AuthRequest;
import com.prepmentor.backend.dto.AuthResponse;
import com.prepmentor.backend.dto.RegisterRequest;
import com.prepmentor.backend.model.User;
import com.prepmentor.backend.repository.UserRepository;
import com.prepmentor.backend.common.ApiResponse;
import com.prepmentor.backend.service.CustomUserDetailsService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private CustomUserDetailsService userDetailsService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<AuthResponse>> login(@Valid @RequestBody AuthRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );

            UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail());
            String token = jwtUtil.generateToken(userDetails.getUsername());

            ApiResponse<AuthResponse> response = new ApiResponse<>(
                    200,
                    "Login successful",
                    new AuthResponse(token),
                    Collections.emptyList()
            );

            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            ApiResponse<AuthResponse> errorResponse = new ApiResponse<>(
                    401,
                    "Invalid credentials",
                    null,
                    Collections.singletonList(ex.getMessage())
            );
            return ResponseEntity.status(401).body(errorResponse);
        }
    }



    @PostMapping("/register")
    public ResponseEntity<ApiResponse<String>> register(@Valid @RequestBody RegisterRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            ApiResponse<String> response = new ApiResponse<>(
                    400,
                    "User already exists",
                    null,
                    Collections.singletonList("Email is already registered")
            );
            return ResponseEntity.badRequest().body(response);
        }

        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();

        userRepository.save(user);

        ApiResponse<String> response = new ApiResponse<>(
                200,
                "User registered successfully",
                null,
                Collections.emptyList()
        );

        return ResponseEntity.ok(response);
    }

}
