package com.spark.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {
     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long id;
     private String firstName;
     private String lastName;
     private String email;
     private String password;
     private List<Long> followers=new ArrayList<>();
     private List<Long> followings=new ArrayList<>();
     @ManyToMany
     private List<Post>savedPost=new ArrayList<>();
     private String gender;
}
