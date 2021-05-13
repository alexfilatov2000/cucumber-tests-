Feature: Crud

  Scenario: Get Marvel characters
    Given I Set Get Marvel service api endpoint
    When I Send a Get HTTP request
    Then I receive valid HTTP Response code 200

  Scenario: Add Marvel character
    Given I Set Post Marvel service api endpoint
    When I Send a Post HTTP request
    Then I receive valid HTTP Response code
