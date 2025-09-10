Feature: End to End Ecommerce Feature

Scenario: Ecommerce product delivery
Given I am on Ecommerce page
When I login to application
And I add items to cart and checkout
And Validate total price limit
Then Select the country and verify Thankyou

@Smoke
Scenario: Ecommerce product delivery cucumber driven
Given I am on Ecommerce page
When I login to application portal
 | username           | password |
 | rahulshettyacademy | learning |
And I add items to cart and checkout
And Validate total price limit
Then Select the country and verify Thankyou
