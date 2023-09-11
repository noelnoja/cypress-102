Feature: End to end eCommerce validation

    Validating the process of purchasing products

    Scenario: eCommerce products delivery
    Given I open eCommerce page
    When I add items into cart
    Then Validate the total prices
    Then Select the country and verify thankyou

    Scenario: Fill the shopping Form
    Given I open eCommerce page
    When I fill the form details
    Then Validate the forms behavior
    Then Select navigate to shopping page