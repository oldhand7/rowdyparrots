import styles from '../styles/Rarity.module.css';
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

import abi from "../utils/contract.json";

const TESTNET_SITE = true;

const CONTRACT_ADDRESS = TESTNET_SITE ?
  "0x26fd358F03bCAd02B287AD656B12d0596A2c45F6" :
  "0xc"
;
const CONTRACT_ABI = abi.abi;
const OPENSEA_COLLECTION_URL = TESTNET_SITE ?
  "https://https://testnets.opensea.io/collection/.." :
  "https://opensea.io/collection/the-epics-v2"
;

const DEPLOYED_CHAINS = [3];

const Rarity = () => {

  const carouselItems = {
    'common': [{'name': '1', 'legend': '36%'},{'name': '2', 'legend': '36%'},{'name': '3', 'legend': '18%'},{'name': '4', 'legend': '20%'},{'name': '5', 'legend': '20%'},{'name': '6', 'legend': '6%'},{'name': '7', 'legend': '6%'},{'name': '8', 'legend': '6%'},{'name': '9', 'legend': '6%'},{'name': '10', 'legend': '6%'},{'name': '11', 'legend': '6%'},{'name': '12', 'legend': '6%'},{'name': '13', 'legend': '6%'},{'name': '14', 'legend': '30%'},{'name': '15', 'legend': '7%'},{'name': '16', 'legend': '7%'},{'name': '17', 'legend': '7%'},{'name': '18', 'legend': '7%'},{'name': '19', 'legend': '7%'},{'name': '20', 'legend': '12%'},{'name': '21', 'legend': '12%'},{'name': '22', 'legend': '12%'},{'name': '23', 'legend': '25%'},{'name': '24', 'legend': '25%'},{'name': '25', 'legend': ''},{'name': '26', 'legend': ''},{'name': '27', 'legend': ''},{'name': '28', 'legend': ''},{'name': '29', 'legend': ''},{'name': '30', 'legend': ''},{'name': '31', 'legend': ''},{'name': '32', 'legend': '13%'},{'name': '33', 'legend': '13%'},{'name': '34', 'legend': '13%'},{'name': '35', 'legend': '13%'},{'name': '36', 'legend': '13%'},{'name': '37', 'legend': '13%'}],
    'mythical': [{'name': '1', 'legend': '0.8%'},{'name': '2', 'legend': '0.4%'},{'name': '3', 'legend': ''},{'name': '4', 'legend': '0.5%'},{'name': '5', 'legend': '0.7%'},{'name': '6', 'legend': '0.8%'},{'name': '7', 'legend': '0.8%'},{'name': '8', 'legend': ''},{'name': '9', 'legend': '0.6%'},{'name': '10', 'legend': ''},{'name': '11', 'legend': ''},{'name': '12', 'legend': '0.8%'}],
    'uncommon': [{'name': '1', 'legend': '16%'},{'name': '2', 'legend': '8%'},{'name': '3', 'legend': '10%'},{'name': '4', 'legend': '10%'},{'name': '5', 'legend': '4.5%'},{'name': '6', 'legend': '4.5%'},{'name': '7', 'legend': '4.5%'},{'name': '8', 'legend': '15%'},{'name': '9', 'legend': '15%'},{'name': '10', 'legend': '6%'},{'name': '11', 'legend': '6%'},{'name': '12', 'legend': '6%'},{'name': '13', 'legend': '6%'},{'name': '14', 'legend': '6%'},{'name': '15', 'legend': '10%'},{'name': '16', 'legend': '10%'},{'name': '17', 'legend': ''},{'name': '18', 'legend': ''},{'name': '19', 'legend': ''},{'name': '20', 'legend': ''},{'name': '21', 'legend': '8%'},{'name': '22', 'legend': '8%'},{'name': '23', 'legend': '8%'},{'name': '24', 'legend': '7.5%'},{'name': '25', 'legend': '7.5%'}],
    'rare': [{'name': '1', 'legend': '8.2%'},{'name': '2', 'legend': '4.1%'},{'name': '3', 'legend': '3.5%'},{'name': '4', 'legend': '3%'},{'name': '5', 'legend': '3%'},{'name': '6', 'legend': '3%'},{'name': '7', 'legend': '5%'},{'name': '8', 'legend': '5%'},{'name': '9', 'legend': '5%'},{'name': '10', 'legend': '4%'},{'name': '11', 'legend': '4%'},{'name': '12', 'legend': '4%'},{'name': '13', 'legend': '4%'},{'name': '14', 'legend': '4%'},{'name': '15', 'legend': '4%'},{'name': '16', 'legend': '4%'},{'name': '17', 'legend': '3%'},{'name': '18', 'legend': '3%'},{'name': '19', 'legend': ''},{'name': '20', 'legend': ''},{'name': '21', 'legend': ''},{'name': '22', 'legend': '4%'},{'name': '23', 'legend': '4%'}],
    'legendary': [{'name': '1', 'legend': '3%'},{'name': '2', 'legend': '1.5%'},{'name': '3', 'legend': '1%'},{'name': '4', 'legend': '1%'},{'name': '5', 'legend': '2.1%'},{'name': '6', 'legend': '2%'},{'name': '7', 'legend': '2%'},{'name': '8', 'legend': '1.3%'},{'name': '9', 'legend': '1%'},{'name': '10', 'legend': ''},{'name': '11', 'legend': ''},{'name': '12', 'legend': ''},{'name': '13', 'legend': ''},{'name': '14', 'legend': ''},{'name': '15', 'legend': ''},{'name': '16', 'legend': '2%'},{'name': '17', 'legend': '2.2%'}]
  }
  


  const [rarity, setRarity] = React.useState('common');

  const [count, setCount] = useState(1);

  const handleNumber = (cnt) => {
      setCount(cnt);
  }

  const handleCount = (cnt) => {
      if(cnt == 1) {
          if(count == 20) return;
          else setCount(count+1);
      } else if (cnt == -1) {
          if(count == 1) return;
          else setCount(count-1);
      }
  }

  const topScroll = () => {
      $("body,html").animate({
        scrollTop:0
      }, 800);
      return false;
  };

  const [currAccount, setCurrentAccount] = useState(null);
  const [currMintCount, setCurrMintCount] = useState(0);
  const [maxMintCount, setMaxMintCount] = useState(0);
  const [breadWinnersNfts, setBreadWinnersNfts] = useState([]);
  const [price, setPrice] = useState(null);
	const [presaleStartDate, setPresaleStartDate] = useState(1639283168);
	const [publicStartDate, setPublicStartDate] = useState(1639369568);

  const [toastLink, setToastLink] = useState("");
  const [chainId, setChainId] = useState(1);

  // ** Mining state variables
  const [isMining, setIsMining] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // ** Gallery Vars
  const [initialLoading, setInitialLoading] = useState(true);

  // ** Refactored get chain id logic from provider
  const getChainId = async () => {
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const { chainId } = await provider.getNetwork()
    setChainId(chainId);
  }

  // ** Try to connect to wallet
  const checkIfWalletIsConnected = () => {
    // @ts-ignore
    const { ethereum } = window;
    if(!ethereum) {
      toast.error('🦊 Missing Metamask!', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return
    }

    // ** Try to get access to the user's wallet
    ethereum.request({ method: 'eth_accounts' })
    .then((accounts) => { 
      // ** There could be multiple accounts
      if(accounts.length !== 0) {
        // ** Get the first account
        let account = accounts[0].toString().toLowerCase();

        // ** Get the chainId
        getChainId();

        // ** Store the account
        setCurrentAccount(account);

        // ** Get the contract mint count info
        getInfo();

        // ** Set up our event listener
        setupEventListener(account);
      } else {
        toast.error(<>No authorized accounts found! <br />Please connect a metamask account!</>, {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    })
  }

  const connectWallet = () => {
    // @ts-ignore
    const { ethereum } = window;

    if(!ethereum) {
      toast.error('🦊 Missing Metamask!', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    ethereum.request({ method: 'eth_requestAccounts' })
    .then((accounts) => {
      let account = accounts[0].toString().toLowerCase();
      setCurrentAccount(account);

      // ** Get the chainId
      getChainId();

      // ** Get the contract mint count info
      getInfo();

      // ** Set up our event listener
      setupEventListener(account);

      // ** Refresh page
      checkIfWalletIsConnected();
    })
    .catch((e) => {
      toast.error(<>Failed to load metamask accounts! <br />Please refresh the page!</>, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    })
  }

  const askContractToMintNft = async () => {
    try {
      // @ts-ignore
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

        let nftTxn;
        try {
              // @ts-ignore
              const now = parseInt((new Date()).getTime() / 1000);
              // nftTxn = await connectedContract.makeAnEpicNFT();
              if ( now < presaleStartDate ) {
                  // toast.error(<>Sorry, Presale Minting is not started.</>, {
                  //     position: "top-left",
                  //     autoClose: 5000,
                  //     hideProgressBar: true,
                  //     closeOnClick: true,
                  //     pauseOnHover: true,
                  //     draggable: true,
                  // });                        
              } else if (presaleStartDate <= now && now < publicStartDate) {  
                  // const gasPrice = await provider.getGasPrice();
                  // nftTxn = await connectedContract.preSaleMint(count);    
                  const gasPrice = await provider.getGasPrice();
                  nftTxn = await connectedContract.preSaleMint(count, { value: (price * count).toString()});                                                       
                } else {  
                  const gasPrice = await provider.getGasPrice();
                  nftTxn = await connectedContract.mint(count, { value: (price * count).toString()});                   
                }
        } catch (er) { 
          const msg = er.error && er.error.message ? er.error.message.slice(20) : "Rejected Transaction";
          toast.error(msg, {
						position: "top-left",
						autoClose: 3000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
					});
          setIsMining(false);
          setIsConfirmed(false);
          return;
        }
        setIsMining(true);

        // console.log("Mining...please wait.")
        await nftTxn.wait();
        setIsMining(false);

        // console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
        setIsConfirmed(true);
        setTimeout(() => setIsConfirmed(false), 4000);
      } else {
        // console.log("Ethereum object doesn't exist!");
      }
    } catch (er) { console.log("errorrrr", er)
      toast.error('🎟️ Failed to mint, please try again!', {
				position: "top-left",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
      setIsMining(false);
      setIsConfirmed(false);
    }
  }

  const getInfo = async () => { 
		try {
      // @ts-ignore
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const eContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      
			let info = await eContract.info();
			console.log("infor", info);

			// Price
			// console.log("price", Number(info[0]) / Math.pow(10, 18));
			setPrice(Number(info[0]));

			// Presale Start Date
			// console.log("presaleStartDate", Number(info[1]));
			setPresaleStartDate(Number(info[1]));
			
			// Public Sale Start Date
			// console.log("publicStartDate", Number(info[2]));
			setPublicStartDate(Number(info[2]));

			// Current Supply
			// console.log("currMintCount", Number(info[3]));
			setCurrMintCount(Number(info[3]));

			// Max Supply
			// console.log("maxMintCount", Number(info[4]));
			setMaxMintCount(Number(info[4]));

		} catch (e) {
			toast.error(<>Failed to load the information from Network. <br />Make sure you are connected to Network and refresh page!</>, {
				position: "top-left",
				autoClose: 5000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
		}
	}


  // ** Setup our listener
  const setupEventListener = async (account) => {
    try {
      // @ts-ignore
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
        // console.log("setupeventlistner")
        connectedContract.on("RowdyParrotsMinted", (id,  from) => {
          let tokenId = id.toNumber();
          // let sender = from;

          // ** Update the current minted count
          setCurrMintCount(tokenId + 1);

          // ** Set toast link
          setToastLink(`https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${tokenId}`);

          toast.success(<div style={{ display: "flex", alignItems: "center" }}><img src="img/bread.png" style={{ width: '15px' }} /> &nbsp; BreadWinnersNFT Minted!</div>, {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

          // ** Reset Toast link after toast duration
          setTimeout(() => setToastLink(OPENSEA_COLLECTION_URL), 3000);
        });
      } else {
        // console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      toast.warn(<>Not your fault, we failed to set up notifications for minting! <br/> This means you&apos;ll have to refresh the page when you finish minting :)</>, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();        
  }, [])

  return (
    <section className={styles.raritySection} id="rarity">
      {/* <p className={styles.info} data-aos="flip-up">Our goal once we complete the roadmap is to create new collections related to animals and thus be able to create a metaverse token.</p> */}
      <h3 className={styles.miniTitle} data-aos="fade-down">Rarity</h3>
      <h2 className={styles.title} data-aos="flip-down">Meet<p className={styles.titleAlt}>unique</p>parrots</h2>
      <div className={styles.selector} data-aos="zoom-out">
        <img src="/img/leafSmall.png" className={styles.leafSmallSelector} />
        <button className={rarity=== 'common' ?styles.selectBtnGlow: styles.selectBtn}  name='common' onClick={() => {setRarity('common')}}>Common</button>
        <button className={rarity=== 'uncommon' ?styles.selectBtnGlow: styles.selectBtn} name='uncommon' onClick={() => {setRarity('uncommon')}}>Uncommon</button>
        <button className={rarity=== 'rare' ?styles.selectBtnGlow: styles.selectBtn} name='rare' onClick={() => {setRarity('rare')}}>Rare</button>
        <button className={rarity=== 'legendary' ?styles.selectBtnGlow: styles.selectBtn} name='legendary' onClick={() => {setRarity('legendary')}}>Legendary</button>
        <button className={rarity=== 'mythical' ?styles.selectBtnGlow: styles.selectBtn} name='mythical' onClick={() => {setRarity('mythical')}}>Mythical</button>
      </div>
      <div className={styles.carousel} data-aos="zoom-in">
        <div className={styles.carouselContainer} style={{width: carouselItems.length * 100 + 'px'}}>
        {carouselItems[rarity].map((item)=>{
          return (
            <div>
          <p style={{color: 'white', marginLeft: '40%'}}>{item['legend'].length ? item['legend'] : '--'} </p>
          <img src={`/img/${rarity}/${item['name']}-min.png`} className={styles.carouselItem}/>
          </div>
          )
        })}
        </div>
      </div>
      <div className={styles.mintWrapper} data-aos="flip-down">
        <img src="/img/leafSmall.png" className={styles.leafSmallMint} />
        <p className={styles.mintInfo}>Start collecting Rowdy Parrots</p>
        {/* <p className={styles.mintInfo}></p> */}
        <div className={styles.mintCount}>
          <button className={styles.mintDec} onClick = {() => handleCount(-1)}>-</button>
          <p className={styles.mintNum}>{count}</p>
          <button className={styles.mintDec} onClick = {() => handleCount(1)}>+</button>
        </div>
        
        <a className={styles.mintLink}>Mint</a>
      </div>
      
      <p style={{color: '#FFFFFF'}} data-aos="fade-up">Do you want to participate in unique raffles?  Join our Discord!</p>
      <a  href='https://discord.gg/FeNyShx8Vt'><img data-aos="fade-up" src='/img/discord.png' alt='' style={{marginBottom: '30px', width: '38px', height: '38px', marginTop: '20px'}}/></a>
      <a
        href={toastLink}
        target="_blank"
        rel="noreferrer"
      >
        <ToastContainer />
      </a>
    </section>
  )
}

export default Rarity;