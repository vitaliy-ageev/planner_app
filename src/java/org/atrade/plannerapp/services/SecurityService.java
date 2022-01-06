package org.atrade.plannerapp.services;

/**
 * Service for Security
 *
 * @author Vitaliy Ageev
 *
 * @version 1.0
 */

public interface SecurityService {

    String findLoggedInUsername();

    void autoLogin (String username, String password);
}
