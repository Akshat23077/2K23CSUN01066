process.env.NODE_TLS_REJECT_UNAUTHORIZED='0';
async function top10Notification(){
    const API_URL="https://20.207.122.201/evaluation-service/notifications";
    try{
        const res=await fetch(API_URL);
        const data= await res.json();
        console.log("Actual API Response:",data);
        const notifications=Array.isArray(data)? data:(data.notifications||[]);
        if(notifications.length===0){
            console.log("NO Notification");
            return ;
        }

        const tweights={
            "Placements":3,
            "Placement":3,
            "Result":2,
            "Event":1
        };
        const HOUR_MS=3600000;
        const WEIGHT_MULT=2*HOUR_MS;

        const listScored=notifications.map(notif =>{
            const time_ms=new Date(notif.Timesatmp).getTime();
            const w=tweights[notif.Type] || 0;

            const prioScore=time_ms+(w*WEIGHT_MULT);
            return {...notif,prioScore};
            });
            const top10=listScored
              .sort((a,b)=> b.prioScore-a.prioScore)
              .slice(0,10);

            console.log("TOP 10 PRIORITY INBOX");
            console.table(top10);
            return top10;
        }
        catch(error){
            console.log("Not able to fetch noification:",error);
        }
        
    }

top10Notification();
