A simple quickstart automation framework with protractor, cucumber, typescript with Zalenium for Grid setup(refer Zalenium official website for setup guidelines with docker), cucumber-html-reporter and jenkins as CI/CD tool with feature filtering  

#Pre- requisite:

1 Active choice, NodeJs plugins in jenkins

2 place a protractorfeatures.txt having feature names(one at each line, put a * to run all features as first line) file in jenkins workspace

#parameters to set in jenkins:

1 Active choice parameter: Features (type as Multiselect)

-groovy script:def featureList=[]
 new File("/Users/username/.jenkins/workspace/protractorfeatures.txt").eachLine{line->featureList.add('./src/feature/'+line+'.feature');}
 return featureList;
  
-groovy fallback script: return['error']




2 Active choice parameter: tags (type as single select)

-groovy script:return['@smoke','@sanity','@regression','@runtime','@developed']

-groovy fallback script: return['error']




3 Active choice parameter: baseUrl (type as single select)

-groovy script:return['https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login']

-groovy fallback script: return['error']

NOTE: here I have used url for demo purpose only





#commands for shell/bat build step:

npm install

npm run tsc

npm run webdriver:update

npm run test -- --specs=$Features --tags=tags --baseUrl=$baseUrl



#Post build steps
-HTML publisher:

  directory: src/reporting/html/
  
  index page: cucumber_reporter.html
