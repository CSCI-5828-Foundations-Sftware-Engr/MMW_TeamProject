# Team Project: Shopping list generator

## Team Member:

Minyan Wang, Suming An, Wen Xu, Yan Zhan

## User Story

Link:  https://www.pivotaltracker.com/n/projects/2635063 

## Rubric
### Web application basic form, reporting
The homepage presents icons which allow users to register, login as well as getting website's basci information.
After the user logs in, the user can search recipes, add recipes to favorite and transfer the recipte to the grocery shopping list.

### Data collection
We initially tried a Kaggle dataset which did not work out because it lacked key information like recipe name. We turned to a API called MealDB which allows us to have a 
huge library of recipes with names, ingredients and images.
 
### Data analyzer
We decompose the recipes and collect ingredients from the recipes.
Then we generate a list of shopping items according to the ingredients.
For the repetitive items, we just keep it as a single item but add the amount of the item.


### Data persistence
MongoDB

### Rest collaboration internal or API endpoint
http://localhost:5100/savedrecipes
http://localhost:5100/shoplist
http://localhost:5100/register
http://localhost:5100/login

### Product environment
node.js

---

### Integration tests
React integration tests.


### Continuous integration
GitHub Actions. node.js.yml workflow.

### Production monitoring instrumenting
We first used Grafana but later just used Heroku metrics to monitor.

---

### Acceptance tests
We conducted a user acceptance testing.
We ask some random users to try out the website and collect their opinions on 
the major features they want and how easily they find it to use the website.

### Event collaboration messaging
We had weekly in-person meetings to discuss our developments of the project and used Fetch.

### Continuous delivery
GitHub Actions and also Heroku to deploy.

