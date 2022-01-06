package org.atrade.plannerapp.dao;

import org.atrade.plannerapp.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, Long> {
    User findByUsername (String username);
}
