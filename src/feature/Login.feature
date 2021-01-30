Feature: Login

    Feature Description: Login as Customer

    Background: initializing App
        Given user is on Home page

    @smoke    
    Scenario: Login as Customer
        When user logs in as Customer
        Then user see own name in welcome message