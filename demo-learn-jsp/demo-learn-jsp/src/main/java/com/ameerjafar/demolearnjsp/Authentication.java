package com.ameerjafar.demolearnjsp;


import org.springframework.stereotype.Service;

@Service
public class Authentication {

    public boolean authenticate(String username, String password) {
        return username.equals("ameerjafar") && password.equals("12345");
    }
}
