_Question 1_

From: marissa@startup.com  
Subject: Bad design

Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Thanks,  
Marissa

Hi Marissa,

Thank you for reaching out. I see your frustration with this new layout. It is a common issue our users have been telling us about lately. Our team is currently working on designing a better dashbaord experience for this.

There is another way to delete indices with the API that you can read the documentation for here: https://www.algolia.com/doc/guides/sending-and-managing-data/manage-indices-and-apps/manage-indices/how-to/delete-indices/#delete-indices-with-the-api

Our goal is to best serve your needs and we encourage all types of feedback! We thank you for using our product and taking the time to give detailed feedback. Let me know if you need any further assistance or questions.

All my best,

Safi Siddiqui

---

_Question 2_:

From: carrie@coffee.com  
Subject: URGENT ISSUE WITH PRODUCTION!!!!

Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".

Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?

Please advise on how to fix this. Thanks.

Hello Carrie,

I am very sorry you are experiencing this issue and thank you for reaching out, we are here to help.

I have found 2 solutions:

1. Simplifying the record structure. As you stated, the metadata is not needed for the search so we can clear this data and make the record smaller. Read more on how to do this over here (https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/how-to/reducing-object-size/).

2. Split the data into smaller chunks and using Algolia's Distinct feature to only display the best results such as the customers feedback. Read more on how to do this here (https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/how-to/indexing-long-documents/).

Using either of these methods can resolve the "Record is too big" error message. Let me know if you are still experiencing any issues or have any further questions.

Sincerely,

Safi Siddiqui safi@algolia.com Customer Success Engineer Algolia, Inc

---

_Question 3_:

From: marc@hotmail.com  
Subject: Error on website

Hi, my website is not working and here's the error:

![error message](./error.png)

Can you fix it please?

Hi Marc,

Thank you for reaching out to Algolia! My name is Safi, I’m a Customer Success Engineer on the team here to help you. Can you tell me what part of the Algolia API you are using and the name of the index you are experiencing this issue on. From there, I can look into the logs to further assist you.

Safi Siddiqui Customer Success Engineer @ Algolia safi@algolia.com
