Feature: Account Transactions

    Feature Description:To make deposits and Withdrawl into a specific Account

    Background: Bring user to Accounts page
        Given user is on Home page
        When user logs in as Customer

    @smoke
    Scenario: Deposit amount
        When user selects account as "1001"
        When user selects deposit section
        When user deposits amount as "10000"
        Then Amount must be deposted to the account
    @smoke
    Scenario: Withdraw amount
        When user selects account as "1001"
        When user selects withdraw section
        When user withdraw amount as "10000"
        Then Amount must be withdrawn from the account