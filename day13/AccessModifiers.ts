class Access{


//public access modifier - deafault access modifier
//private access modifier - can be accessed only inside the class
//protected access modifier - can be accessed inside the class and by the derived class

public loadUrl(){
    console.log("Load URL method")
}

private loadUserName(){
    console.log("Load UserName method")
}

protected info(){
    console.log("Info Method")
}

public getInfo(){
    this.loadUserName() //directly we cannot call outside class-> so created public method call
    this.info()
}

}

let acc=new Access()
acc.loadUrl()
acc.getInfo()
