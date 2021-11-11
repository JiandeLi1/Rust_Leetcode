impl Solution {
    pub fn mincost_tickets(days: Vec<i32>, costs: Vec<i32>) -> i32 {
        let mut ans = vec![0; *days.last().unwrap() as usize + 1];
        days.iter().for_each(|&i| ans[i as usize]+=1);
        for day in 1..ans.len(){
            ans[day] = match ans[day]{
                1=>(ans[day-1]+costs[0])
                .min(ans[day.max(7)-7]+costs[1])
                .min(ans[day.max(30)-30]+costs[2]),
                _=>ans[day-1],
            };
        }
        ans[ans.len() - 1] as i32
    }
}