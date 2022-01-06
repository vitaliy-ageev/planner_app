package org.atrade.plannerapp.dao;

import org.atrade.plannerapp.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleDao extends JpaRepository<Role, Long> {
}
