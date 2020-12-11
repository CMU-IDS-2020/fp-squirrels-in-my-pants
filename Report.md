# Final Project Report


<p align="center">
  <img src="images/intro.gif" />
</p>


**Project URL**: [Say Their Names](https://cmu-ids-2020.github.io/fp-squirrels-in-my-pants/)

Our project seeks to examine the state of police brutality in America and understand what evidence is there of bias and injustice in the system itself. Are certain racial groups more likely to be victim of a police brutality incident? Are there any community indicators, such as violent crime levels, that can tell us anything about the rates of police brutality in those communities? Not only do we look at this from the perspective of the victim, but we also examine the view of police brutality from the perspective of the perpetrator. Are the policies that are implemented to help prevent police brutality successful in lowering levels of police killings? On top of simply implementing policies, are police officers being held accountable?
Our solution uses publicly available data to best uncover insights relating to the previously asked questions. Throughout the course of the project, we conduct discourse on not only the associations we uncovered, but also the limitations that come with the state of availability with police data.

## Introduction

Systemic racism is ingrained in many of America’s longstanding institutions. With the recent killings of George Floyd, Ahmaud Arbery, and Breonna Taylor, there has been widespread attention to the prevalence of police brutality and its disproportionate focus on Black Americans. Not only does police brutality result in the senseless killings of so many individuals in this country but it also impacts the communities in which such killings occur. 

## Related Work

There have been previous efforts to understand the racial disparity of police brutality as well as efforts to make police data on policies publicly available. Specific efforts, such as the [Use of Force Project](http://useofforceproject.org/#project), exist to educate the public on what policies are implemented in specific police departments across the country, but there wasn't a deep dive into specific cities and the local impacts of those policies. Additionally, the [Police Data Initiative](https://www.policedatainitiative.org/) helps give access to datasets on Police Brutality incidents in individual cities, but there is no analysis done to see any patterns over time. Our project sought to bridge this gap by combining information on implemented policies in specific cities and visualizing the police department's response to that, in coordination with the data to help dive into specific case studies of individual cities.

## Methods

We first used data from the [Police Violence & Racial Equity Kaggle Dataset](https://www.kaggle.com/jpmiller/police-violence-in-the-us). This gave us access to data from multiple sources of police brutality incidents. We ultimately used the Mapping Police Violence dataset which gave us information on racial breakdown, where they were killed, as well as the disciplinary outcome for the police officer from 2013 to 2020. Additionally, we used data from the Police Data Initiative to give us information about specific cities and their incidents of police brutality.

We first began with a visualization of police brutality incidents since December 2015 until December 2020 as part of an introduction to the narrative. We wanted to communicate the importance of combining humanity with data analysis and to encourage the reader to be mindful that even though we are computing statistical analyses, it is just as important to remember the permanence of the consequences of police brutality. While the event of a shooting is simply a moment in time, the lasting repercussions of losing a life are far more permanent. This visualization was created by using D3.js to create a map of the United States, and then animate adding points over time with a slider to allow the user to manipulate the visualization as well. Due to the large number of points, we were not able to use the full duration of the data as D3.js became very slow with the full dataset.

We then transitioned into examining those instances of police brutality with special attention paid to the racial breakdown. Using the full dataset and Chart.js, we created a pie chart with 2 rings, where the inner ring contained the breakdown of police brutality incidents by race and the outer ring contained the breakdown of the United States population by race. This allowed us to directly compare racial breakdowns between police brutality incidents and population percentages to see if there are any disparities.

After the racial breakdown, we then dived into specific examples of cities across the United States and what factors have any association with police brutality rates. We first took a look at violent crime rates and police killing rates across various cities in the United States. To see the relationship between the police homicide rates and violent crime rates, the average number of violent crimes in each city was divided by total population multiplied by 10^3, and the average number of deaths by police was divided by the total population and the number of years multiplied by 10^6. We scaled the raw data points by multiplying 10^3 and 10^6 for the scatter points to be in the same range for easier comparison. Using Chart-Studio and plot.ly, we were able to embed this graph into our project.

We then motivated an example of diving into specific cities that implemented specific policies to gauge how effective those policies were in reducing police brutality. Using publicly available police data again from the Police Data Initiative, we graphed the changes in police brutality rates in specific cities over the past. To give the audience context on when the policies were implemented, we used features in Chart.js to not only create the graph but also to add a marker to indicate when the de-escalation policy was implemented.

After examining policies, we then decided to add an element of interaction where the audience guessed how many police officers are held accountable for their actions out of 100. We created a grid images that let the audience pick the number of people that they think were held accountable and compared it to the actual amount. This helped create an awareness of how few police officers are held accountable for their actions even with specific policies in place.

Lastly, we wrapped up our narrative by calling for data transparency. As we worked with public data, we were extremely limited in that not all police departments published data regarding police brutality incidents, and additionally they did not have published studies examining the impact of policies and evaluating their success.

## Results

Beginning with our analyses, we first saw a disparity in racial breakdown of police brutality incidents in relation to population percentages. While Black people only consist of about 12% of the population, they composed 26% of police brutality incidents from 2013 to 2019. Additionally, while White people are 61% of the population, they compose about 44% of police killings. This indicated that Black people are victims of police brutality at a higher rate than other races despite being a lower percentage of the population, while White people are killed at a lower rate than other races despite being a higher percentage of the population. While we can see this association between race and police brutality, it does not answer the full question. It is only an association at this point.

![](images/race.png)


We then dived into a more geographic approach by seeing if specific cities that were more prone to police brutality had other indicators that could help us understand more about police brutality rates. Based on our graph comparing violent crime rates to police brutality rates, we noticed that there was no strong association between the two. For example, Nashville has a police brutality rate of 2.6%, compared to it's violent crime rate, which is 12.4%. In comparison, New Orleans has a similar violent crime rate of 11.5%, but it has almost double the police brutality rate with a rate of 5%.

![](images/crime-rates.png =100x20)

Next, we looked into specific cities and took a look at individual policies implemented. When taking a look at de-escalation policies, we can see that there is an immediate drop for cities that implemented it, but then the rates rose again in the examples of Denver and Cincinatti. Because of the nature of public data, we are limited in understanding the direct effects of policies as the data does not account for whether or not de-escalation policies played any role in the how police officers engaged with the victims.

![](images/de-escalation.png)

After examining police brutality rates in conjunction with de-escalation policy implementation dates, we then looked at charging police officers. Out of 8543 cases between 2013-present, only 1.4% of officers (117) where charged. This is simply the first step into being held accountable. After being charged, we only knew 48 results - 19 were convicted and 29 were acquitted of all charges. The incredibly low conviction rate is quite possibly another reason why policies are not as effective in reducing police brutality rates - we are simply not holding officers accountable and are allowing them to continue practicing the same injustices they practiced when they took the lives of those they killed. 

![](images/guess.png)

## Discussion

A common argument presented in discourse of police brutality is that victims live in more violent areas which makes them more prone to falling victim to police brutality. While this is economically infeasible for people to simply move to "safer" areas, we can also see that there isn't always an association with violent crime rates and police brutality rates. Instead, we must consider the the systemic injustices present. These take root in inherent racism as well as lack of transparency and accountability among police officers.

From our results, we can see an association between race and victims of police brutality. As Black people are killed at higher rates relative to their population percentage, we are able to visualize the systemic racism of police forces across the United States and how they are disproportionately affecting Black lives.

There are some limitations to this data. We must consider the biases within the data itself. Many police departments do not require comprehensive reporting, thus allowing important details to be glossed over or ignored. When holding officers accountable, there is a lot that is unknown about the cases - were officers charged, and were they convicted? Knowing only 48 of the outcomes of 117 charges further highlights the 

When it is a life that is at stake, there should not be an excuse to inaccurately represent or to even hide data that could save the lives of many others. Additionally, it is not permissible to allow people to commit such crimes again. Officers should be held accountable for their actions at a greater rate than they are today.

## Future Work

We would love to continue to examine the effect of specific policies on how they impacted police brutality rates; however, there is a lack of transparent data from police departments across the country. Additionally, we would be interested in extending and exploring racial breakdowns of traffic stops and other forms of citizen-police interactions to determine if biases translate across all mediums of interaction.

With the influence of public data so prevalent in this project, many of the future steps rely upon police departments being willing to collect and release more data that includes characteristics such as race and ethnicity at traffic stops and arrests as well as comprehensive reporting. While we critique police departments for their data practices, we must also consider the infrastructure in which they operate. With few contractors and vendor lock-in, many police departments to not have access to the infrastructure needed for the aforementioned data practices.

There are important investments to be made in regulating the police in order for equality to truly be achieved.

Black Lives Matter.
