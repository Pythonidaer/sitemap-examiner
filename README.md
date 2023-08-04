# XML Sitemap Examiner

## How does your system work?

My system is simple. When the page loads, a behind-the-scenes request is made to the XML Sitemap. The URL data that is returned is parsed, so that the user can search for SKU with a dropdown feature.

Once they click 'search', a fetch request is made to the specific page, where data is scraped based on class name. Once the information for title, author and price has been obtained, it is written onto the screen.

## How could you scale your system to search across all sitemap files?

I am not sure. This is my first time working with a Sitemap. Generally, I'd say it depends on the data within each sitemap. Maybe add in some conditional logic and more functionality.

## How will your system perform with 100 users? 10,000 users? 1,000,000 users?

I assume performance would go down.

## What documentation, websites, papers, etc., did you consult in doing this assignment?

Some Axios, YouTube, lots of ChatGPT. I've gotten into the habit of learning through asking questions. Please note, no sensitive information was provided into any prompts (linked in resources), so code was built based off reference /Q&A.

## How long did you spend on this exercise? If you had unlimited more time to spend on this, how would you spend it, and how would you prioritize each item?

I spent 2 days on this so far, and plan to work on it until the day that it is due. If I had unlimited more time to spend on this, I would probably look into what performance improvements good be made, as well as best practices to see if I am going about the obtaining of sitemap information in the best way. (See question about 1,000,000 users).

## If you were to critique your code, what would you have to say about it?

I would say my code lasts consistency. Normally I am able to refactor my code a bit, but truthfully I'm not always certain what the best variable name should be, or if I should take a certain coding pattern approach. I am sure that I am using a variety of methods, but overall I would say other than improvements in readability, one issue might be what I name my variables.

## How can you change your system to be updated to support simple keyword searches?

It depends. Currently my system is gearing to support simple SKU searches. If the keyword being used matches what is in the URL, then it might already support this. However, I would need some use cases to understand what the user is trying to achieve.

### Day 1 References

(Christianbook)[https://www.christianbook.com/?navcat=toplogo]
(Sample Page)[https://www.christianbook.com/101-dalmatians-ebook-dodie-smith/9781101153642/pd/47060EB?product_redirect=1&Ntt=47060EB&item_code=&ps_exit=RETURN|legacy&Ntk=keywords&event=ESRCG]
(Rapid API)[https://rapidapi.com/guides/axios-different-data-formats]
(Axios)[https://www.npmjs.com/package//axios]
(@xmldom/xmldom)[https://www.npmjs.com/package/@xmldom/xmldom]
(Instructions)[https://docs.google.com/document/d/1pFDrmq8h50E4Xe0cY8T6AZvJge9jO9B3foKqkdDmcq8/edit]
(ChatGPT Prompt 1)[https://chat.openai.com/share/464bdfc6-6550-4a3d-acac-31f94a1e906b]
(ChatGPT Prompt 2)[https://chat.openai.com/share/7c0a05db-9bea-4e52-a154-81d9471cf040]
