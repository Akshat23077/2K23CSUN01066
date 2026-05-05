To rank the notification ,i used a composite score balancing category and recency:
1.weights:Placements (3), Results (2), Events (1).
2.Formula:PriorityScore=timestamp+(weight x 2hrs).
purpose: this "priority buffer ensures critical notification (like placements)are not burried
by newer ,low-priority for at least 4 hours.

implenattion details:
data fetching 
foramting :outputr is displayed via console.table() for celar visualisation of teh top 10 ranked items


efficiency 
current approach :sorting the list takes O(NlogN) time.
optimized solution : to hanle high volume ,i would implement a Min-heap of size 10

benefits: thsi allows the system to update teh top 10 in O(log10) time whenever a new notification arrives ,ensuring
tehplatform remains fast a sdata grows.
