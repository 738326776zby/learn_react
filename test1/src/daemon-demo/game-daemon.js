class Game{
  msgQueue = null;
  daemonId = null;

  constructor(){
    //  启动守护进程
    this.msgQueue = ['aaa','bbb','ccc'];
    this.daemon();
  }

  sendMsg(msg){
    this.msgQueue.push(msg);
  }

  // 3秒执行一次 deal()
  async daemon(){
    this.daemonId = setInterval(this.deal,3000);
  }
  // 读取弹出消息，且输出
  deal = () => {
    let msg = null;
    if(this.msgQueue.length > 0) msg = this.msgQueue.pop();
    if(msg == 'stop') clearInterval(this.daemonId);
    console.log(new Date().getTime());
    console.log("收到消息：",msg," 做出合理的处理！");
  }
}

export default Game;