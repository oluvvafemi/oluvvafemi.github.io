---
layout: post
title: Building a monolithic weather app with Rails from UI design to deployment
---

I recently started my foray into full-stack web development, and during the course of the past three months I've learnt that the web runs on forms and that modern Javascript is a joy to write but you still need a combination of different build tools. I've also seen quite a lot of assertions that Ruby on Rails is dead, however I find the coding by convention philosophy of Rails appealing. For a beginner, it helps you adhere to standard practices and quickly prototype ideas. 

![screenshots]({{ site.baseurl }}/assets/images/weather-app/screenshots.png)


The motivation for building the weather app was to put everything I've learnt into practice from UI design to deployment. You can find the code [here](https://github.com/oluvvafemi/weather-app) and the live app [here](https://weather.chrisadebiyi.com/).

### UI design
You don't need to have innate artistic talents to craft a UI that is somewhat decent and usable. You can learn to design with tactics not talent using some tricks. Check out [Refactoring UI](https://www.refactoringui.com/) if you would like to learn more about this. 
Some of the key-points are:
- Start by sketching out the design in low fidelity (preferably a paper and pencil) so you can focus on the layout and ignore irrelevant details at this stage.
- Make extensive use of visual hierarchy so that everything doesn't compete for attention.
- To make things look clean, use spaces so that components don't look cramped
- Font choice is important. If you're going for a playful look, try a rounded sans-serif
- For images, use high quality photos(probably doesn't need to be said), and add an overlay to background images so that the main components can stand out.
			  
How do you know if a design is good enough? You can use a framework like the [UX honeycomb](https://semanticstudios.com/user_experience_design/). Is information findable in your design, is it accessible, useful, usable or desirable? 

### Setup and version control
This stage involves creating a new Rails app, making an initial commit after  installation of some gems and setup. Some of the gems used are RSpec for testing, Slim for views template, and HTTP for making requests.

### Red, Green, Refactor
Before the actual implementation, it is important to write a few test cases. There are different Ruby testing frameworks like Minitest and RSpec, but I chose the widely adopted RSpec for this project. Irrespective of the framework you choose, the concepts of testing remain the same. Your first run of the test suites should fail 🔴, this is because there is no code to test yet.  After this, the code to make the test pass is written 🟢. When the test suites run successfully, you can then move on to refactoring.  

Testing provides a safety net as more features are added later on. It could also lead to cleaner designs because you have to think of which methods to expose before the implementation.

Write request tests instead of controller tests (at least for Rails 5+). [The recommendation is to write request tests since they allow you to focus on a single controller action whereas the controller tests involve the router, the middleware stack, and both rack requests and responses](https://stackoverflow.com/a/46500842).

Be careful when testing views templates, in RSpec it would be something like:
```
render :template => "widgets/widget.html.erb"

rendered.should contain("slicer")
```
This would throw an error `NoMethodError: assert_template has been extracted to a gem` (tested in Rails 7, can't speak for other versions). 

Writing tests for the templates generated is generally [not a good idea](https://github.com/rails/rails/issues/18950#issue-57746192) because it ties the test to the internal structure of how your views are organized. It is better to write tests that check for which elements to expect like a text input or button named 'GO'. You can write such tests using feature specs. This comes with the added benefit that small changes in your UI design do not break the tests.

### Views and Markup with Slim
ERB is the default views template in Rails. It is very verbose and can be difficult to read. For this reason, I opted for the [Slim template](https://github.com/slim-template/slim-rails). While ERB is slightly faster, Slim is cleaner, more readable and easier to maintain. Needless to say it is also beautiful to look at.

### Services
It is possible to put all functions inside the controller, but a better pattern is to create Rails service objects to handle api calls and other specialized functions. They make the controller cleaner and can be reused by other controllers too, keeping your code DRY. Service objects are simply Ruby objects designed to perform a single action. For example, in this project the functions to get and process the weather data from OpenWeatherMap API and the image data from Unsplash are abstracted into separate services - WeatherService and PhotoService. 

WeatherService returns a Ruby hash with only the relevant data and PhotoService returns the image url with specific dimensions for a given location.

### Environment variables and Config files
There are different ways to store credentials and configurations in Rails. 

One way is to use Rails credentials which are stored and encrypted in `config/credentials.yml.enc`. The master key in `config/master.key` is used to encrypt the credentials file. You can commit `config/credentials.yml.enc` but the master key has to be safeguarded. To add your api keys and access tokens to the file, run `rails credentials:edit`.

Another way is to simply use environment variables for everything. This is recommended if you would like to deploy with a PaaS like Digital Ocean's App Platform. With this method there is no risk of accidentally pushing any key to Github, however you have to set the environment variables twice - locally and on the App Platform. 

### Deployment
There are endless options here but for simplicity and efficiency I chose Digital Ocean's App Platform. You push your code to Github(or a repository of your choice) and it automatically builds and deploy your app. The basic plan goes for $5/month. 

If you decide to use App Platform or another PaaS, be aware that you may have to set some environment variables otherwise your Rails app won't work. The two important ones are `SECRET_KEY_BASE` and `RAILS_SERVE_STATIC_FILES`.  The value for `SECRET_KEY_BASE` can be found in `config/master.key`, while `RAILS_SERVE_STATIC_FILES` should be set to true if you used Rails default asset pipeline.

On a last note, if you developed your Rails app on macOS with Apple silicon, you might need to run `bundle lock --add-platform x86_64-linux` to add linux as one of the platforms in `Gemfile.lock`.

The code for the project can be found [here](https://github.com/oluvvafemi/weather-app). Enjoy!
