package org.atrade.plannerapp.services;

import org.atrade.plannerapp.models.User;

/**
 * Service class for {@link org.atrade.plannerapp.models.User}
 *
 * @author Vitaliy Ageev
 * @version 1.0
 */

public interface UserService {
    void save (User user);

    User findByUsername (String username);
}
