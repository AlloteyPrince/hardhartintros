// import
const {ethers} =require('hardhat')


async function main(){
    const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
    
    console.log("Deploying contract ...")
    const simpleStorage = await SimpleStorageFactory.deploy()
    await simpleStorage.deployed()
};


main()
.then(() =>process.exist(0))
.catch((error) =>{
    console.error(error);
    pprocess.exit(1)
})