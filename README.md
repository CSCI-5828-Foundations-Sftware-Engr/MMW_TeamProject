# Team Project: Shopping list generator

## Team Member:

Minyan Wang, Suming An, Wen Xu, Yan Zhan

## User Story

Link:  https://www.pivotaltracker.com/n/projects/2635063 

## Web application basic form, reporting
The homepage presents icons which allow users to register, login as well as getting website's basci information.
After the user logs in, the user can search recipes, add recipes to favorite and transfer the recipte to the grocery shopping list.

## Data collection
We initially tried a Kaggle dataset which did not work out because it lacked key information like recipe name. We turned to a API called MealDB which allows us to have a 
huge library of recipes with names, ingredients and images.
 
## Data analyzer
We decompose the recipes and collect ingredients from the recipes.
Then we generate a list of shopping items according to the ingredients.
For the repetitive items, we just keep it as a single item but add the amount of the item.

## Unit tests
Jest?

## Data persistence
MongoDB atlas center?

## Rest collaboration internal or API endpoint
http://localhost:5100/savedrecipes
http://localhost:5100/shoplist
http://localhost:5100/register
http://localhost:5100/login

## Product environment


---

## Integration tests

## Using mock objects or any test doubles

## Continuous integration
GitHub Actions. node.js.yml workflow.

## Production monitoring instrumenting
We used Grafana but later just used Heroku metrics to monitor.

---

## Acceptance tests

## Event collaboration messaging
We had weekly in-person meetings to discuss our developments of the project.

## Continuous delivery
GitHub Actions and also Heroku to deploy.

