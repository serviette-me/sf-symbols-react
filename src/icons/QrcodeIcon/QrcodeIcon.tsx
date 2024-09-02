import { IconProps } from "../../types"

export default function QrcodeIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.111328125 27.111328125"
          className={className}
        >
          <path
            d="              M4.4297 12.7693H8.3537C11.3887 12.7693 12.7697 11.3753 12.7697 8.3403V4.4293C12.7697 1.3813 11.3887 0.0003 8.3537 0.0003H4.4297C1.3947 0.0003 -0.0003 1.3813 -0.0003 4.4293V8.3403C-0.0003 11.3753 1.3947 12.7693 4.4297 12.7693ZM18.7577 12.7693H22.6817C25.7167 12.7693 27.1117 11.3753 27.1117 8.3403V4.4293C27.1117 1.3813 25.7167 0.0003 22.6817 0.0003H18.7577C15.7227 0.0003 14.3417 1.3813 14.3417 4.4293V8.3403C14.3417 11.3753 15.7227 12.7693 18.7577 12.7693ZM4.0337 9.5563C3.4587 9.5563 3.2127 9.3103 3.2127 8.7363V4.0332C3.2127 3.4453 3.4587 3.2132 4.0337 3.2132H8.7497C9.3247 3.2132 9.5707 3.4453 9.5707 4.0332V8.7363C9.5707 9.3103 9.3247 9.5563 8.7497 9.5563ZM18.3617 9.5563C17.7867 9.5563 17.5407 9.3103 17.5407 8.7363V4.0332C17.5407 3.4453 17.7867 3.2132 18.3617 3.2132H23.0777C23.6527 3.2132 23.8987 3.4453 23.8987 4.0332V8.7363C23.8987 9.3103 23.6527 9.5563 23.0777 9.5563ZM4.9217 8.1763H7.8207C8.0667 8.1763 8.1757 8.0663 8.1757 7.7793V4.9763C8.1757 4.7033 8.0667 4.5933 7.8207 4.5933H4.9217C4.6897 4.5933 4.5937 4.7033 4.5937 4.9763V7.7793C4.5937 8.0663 4.6897 8.1763 4.9217 8.1763ZM19.2777 8.1763H22.1617C22.4217 8.1763 22.5177 8.0663 22.5177 7.7793V4.9763C22.5177 4.7033 22.4217 4.5933 22.1617 4.5933H19.2777C19.0317 4.5933 18.9497 4.7033 18.9497 4.9763V7.7793C18.9497 8.0663 19.0317 8.1763 19.2777 8.1763ZM4.4297 27.1113H8.3537C11.3887 27.1113 12.7697 25.7173 12.7697 22.6683V18.7583C12.7697 15.7223 11.3887 14.3283 8.3537 14.3283H4.4297C1.3947 14.3283 -0.0003 15.7223 -0.0003 18.7583V22.6683C-0.0003 25.7173 1.3947 27.1113 4.4297 27.1113ZM15.4357 18.4703H18.3337C18.5797 18.4703 18.6897 18.3753 18.6897 18.0883V15.2853C18.6897 14.9983 18.5797 14.9023 18.3337 14.9023H15.4357C15.2027 14.9023 15.1077 14.9983 15.1077 15.2853V18.0883C15.1077 18.3753 15.2027 18.4703 15.4357 18.4703ZM23.0237 18.4703H25.9087C26.1677 18.4703 26.2637 18.3753 26.2637 18.0883V15.2853C26.2637 14.9983 26.1677 14.9023 25.9087 14.9023H23.0237C22.7777 14.9023 22.6957 14.9983 22.6957 15.2853V18.0883C22.6957 18.3753 22.7777 18.4703 23.0237 18.4703ZM4.0337 23.8983C3.4587 23.8983 3.2127 23.6523 3.2127 23.0783V18.3612C3.2127 17.7873 3.4587 17.5412 4.0337 17.5412H8.7497C9.3247 17.5412 9.5707 17.7873 9.5707 18.3612V23.0783C9.5707 23.6523 9.3247 23.8983 8.7497 23.8983ZM19.2637 22.2712H22.1487C22.4087 22.2712 22.5177 22.1623 22.5177 21.8753V19.0723C22.5177 18.7993 22.4087 18.6893 22.1487 18.6893H19.2637C19.0177 18.6893 18.9357 18.7993 18.9357 19.0723V21.8753C18.9357 22.1623 19.0177 22.2712 19.2637 22.2712ZM4.9217 22.5043H7.8207C8.0667 22.5043 8.1757 22.4083 8.1757 22.1073V19.3043C8.1757 19.0313 8.0667 18.9353 7.8207 18.9353H4.9217C4.6897 18.9353 4.5937 19.0313 4.5937 19.3043V22.1073C4.5937 22.4083 4.6897 22.5043 4.9217 22.5043ZM15.4357 26.0583H18.3337C18.5797 26.0583 18.6897 25.9493 18.6897 25.6623V22.8593C18.6897 22.5863 18.5797 22.4763 18.3337 22.4763H15.4357C15.2027 22.4763 15.1077 22.5863 15.1077 22.8593V25.6623C15.1077 25.9493 15.2027 26.0583 15.4357 26.0583ZM23.0237 26.0583H25.9087C26.1677 26.0583 26.2637 25.9493 26.2637 25.6623V22.8593C26.2637 22.5863 26.1677 22.4763 25.9087 22.4763H23.0237C22.7777 22.4763 22.6957 22.5863 22.6957 22.8593V25.6623C22.6957 25.9493 22.7777 26.0583 23.0237 26.0583Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.140625 26.140625"
          className={className}
        >
          <path
            d="              M3.5137 12.1137H8.5997C10.9787 12.1137 12.1137 10.9917 12.1137 8.5727V3.5547C12.1137 1.1347 10.9787 -0.0003 8.5997 -0.0003H3.5137C1.1347 -0.0003 -0.0003 1.1347 -0.0003 3.5547V8.5727C-0.0003 10.9917 1.1347 12.1137 3.5137 12.1137ZM17.5407 12.1137H22.6267C25.0057 12.1137 26.1407 10.9917 26.1407 8.5727V3.5547C26.1407 1.1347 25.0057 -0.0003 22.6267 -0.0003H17.5407C15.1617 -0.0003 14.0277 1.1347 14.0277 3.5547V8.5727C14.0277 10.9917 15.1617 12.1137 17.5407 12.1137ZM3.3357 9.5427C2.8027 9.5427 2.5707 9.2967 2.5707 8.7637V3.3497C2.5707 2.8167 2.8027 2.5707 3.3357 2.5707H8.7777C9.2967 2.5707 9.5427 2.8167 9.5427 3.3497V8.7637C9.5427 9.2967 9.2967 9.5427 8.7777 9.5427ZM17.3637 9.5427C16.8297 9.5427 16.5977 9.2967 16.5977 8.7637V3.3497C16.5977 2.8167 16.8297 2.5707 17.3637 2.5707H22.8047C23.3377 2.5707 23.5707 2.8167 23.5707 3.3497V8.7637C23.5707 9.2967 23.3377 9.5427 22.8047 9.5427ZM4.7437 7.6697H7.3557C7.5747 7.6697 7.6697 7.5877 7.6697 7.3147V4.7847C7.6697 4.5387 7.5747 4.4437 7.3557 4.4437H4.7437C4.5117 4.4437 4.4437 4.5387 4.4437 4.7847V7.3147C4.4437 7.5877 4.5117 7.6697 4.7437 7.6697ZM18.8127 7.6697H21.4237C21.6567 7.6697 21.7517 7.5877 21.7517 7.3147V4.7847C21.7517 4.5387 21.6567 4.4437 21.4237 4.4437H18.8127C18.5937 4.4437 18.5117 4.5387 18.5117 4.7847V7.3147C18.5117 7.5877 18.5937 7.6697 18.8127 7.6697ZM3.5137 26.1407H8.5997C10.9787 26.1407 12.1137 25.0197 12.1137 22.5997V17.5817C12.1137 15.1617 10.9787 14.0277 8.5997 14.0277H3.5137C1.1347 14.0277 -0.0003 15.1617 -0.0003 17.5817V22.5997C-0.0003 25.0197 1.1347 26.1407 3.5137 26.1407ZM15.0387 17.8687H17.6507C17.8827 17.8687 17.9787 17.7867 17.9787 17.5137V14.9847C17.9787 14.7387 17.8827 14.6427 17.6507 14.6427H15.0387C14.8207 14.6427 14.7387 14.7387 14.7387 14.9847V17.5137C14.7387 17.7867 14.8207 17.8687 15.0387 17.8687ZM22.4627 17.8687H25.0747C25.3067 17.8687 25.3887 17.7867 25.3887 17.5137V14.9847C25.3887 14.7387 25.3067 14.6427 25.0747 14.6427H22.4627C22.2437 14.6427 22.1617 14.7387 22.1617 14.9847V17.5137C22.1617 17.7867 22.2437 17.8687 22.4627 17.8687ZM3.3357 23.5707C2.8027 23.5707 2.5707 23.3237 2.5707 22.8047V17.3907C2.5707 16.8437 2.8027 16.5977 3.3357 16.5977H8.7777C9.2967 16.5977 9.5427 16.8437 9.5427 17.3907V22.8047C9.5427 23.3237 9.2967 23.5707 8.7777 23.5707ZM18.7847 21.5877H21.3967C21.6287 21.5877 21.7247 21.4917 21.7247 21.2327V18.6897C21.7247 18.4437 21.6287 18.3477 21.3967 18.3477H18.7847C18.5667 18.3477 18.4847 18.4437 18.4847 18.6897V21.2327C18.4847 21.4917 18.5667 21.5877 18.7847 21.5877ZM4.7437 21.6977H7.3557C7.5747 21.6977 7.6697 21.6147 7.6697 21.3417V18.8127C7.6697 18.5667 7.5747 18.4707 7.3557 18.4707H4.7437C4.5117 18.4707 4.4437 18.5667 4.4437 18.8127V21.3417C4.4437 21.6147 4.5117 21.6977 4.7437 21.6977ZM15.0387 25.2927H17.6507C17.8827 25.2927 17.9787 25.1977 17.9787 24.9377V22.4077C17.9787 22.1487 17.8827 22.0667 17.6507 22.0667H15.0387C14.8207 22.0667 14.7387 22.1487 14.7387 22.4077V24.9377C14.7387 25.1977 14.8207 25.2927 15.0387 25.2927ZM22.4627 25.2927H25.0747C25.3067 25.2927 25.3887 25.1977 25.3887 24.9377V22.4077C25.3887 22.1487 25.3067 22.0667 25.0747 22.0667H22.4627C22.2437 22.0667 22.1617 22.1487 22.1617 22.4077V24.9377C22.1617 25.1977 22.2437 25.2927 22.4627 25.2927Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.66015625 26.66015625"
          className={className}
        >
          <path
            d="              M3.9927 12.4685H8.4627C11.1977 12.4685 12.4687 11.1975 12.4687 8.4495V4.0195C12.4687 1.2715 11.1977 -0.0005 8.4627 -0.0005H3.9927C1.2717 -0.0005 -0.0003 1.2715 -0.0003 4.0195V8.4495C-0.0003 11.1975 1.2717 12.4685 3.9927 12.4685ZM18.1837 12.4685H22.6547C25.3887 12.4685 26.6597 11.1975 26.6597 8.4495V4.0195C26.6597 1.2715 25.3887 -0.0005 22.6547 -0.0005H18.1837C15.4627 -0.0005 14.1917 1.2715 14.1917 4.0195V8.4495C14.1917 11.1975 15.4627 12.4685 18.1837 12.4685ZM3.7047 9.5565C3.1447 9.5565 2.9117 9.3245 2.9117 8.7635V3.7185C2.9117 3.1585 3.1447 2.9125 3.7047 2.9125H8.7637C9.3107 2.9125 9.5567 3.1585 9.5567 3.7185V8.7635C9.5567 9.3245 9.3107 9.5565 8.7637 9.5565ZM17.8967 9.5565C17.3357 9.5565 17.1037 9.3245 17.1037 8.7635V3.7185C17.1037 3.1585 17.3357 2.9125 17.8967 2.9125H22.9547C23.5017 2.9125 23.7477 3.1585 23.7477 3.7185V8.7635C23.7477 9.3245 23.5017 9.5565 22.9547 9.5565ZM4.8397 7.9435H7.6017C7.8337 7.9435 7.9437 7.8475 7.9437 7.5605V4.8945C7.9437 4.6345 7.8337 4.5255 7.6017 4.5255H4.8397C4.6077 4.5255 4.5257 4.6345 4.5257 4.8945V7.5605C4.5257 7.8475 4.6077 7.9435 4.8397 7.9435ZM19.0587 7.9435H21.8067C22.0527 7.9435 22.1487 7.8475 22.1487 7.5605V4.8945C22.1487 4.6345 22.0527 4.5255 21.8067 4.5255H19.0587C18.8267 4.5255 18.7437 4.6345 18.7437 4.8945V7.5605C18.7437 7.8475 18.8267 7.9435 19.0587 7.9435ZM3.9927 26.6605H8.4627C11.1977 26.6605 12.4687 25.3885 12.4687 22.6405V18.2105C12.4687 15.4625 11.1977 14.1915 8.4627 14.1915H3.9927C1.2717 14.1915 -0.0003 15.4625 -0.0003 18.2105V22.6405C-0.0003 25.3885 1.2717 26.6605 3.9927 26.6605ZM15.2577 18.1975H18.0057C18.2517 18.1975 18.3477 18.1015 18.3477 17.8285V15.1485C18.3477 14.8885 18.2517 14.7795 18.0057 14.7795H15.2577C15.0257 14.7795 14.9437 14.8885 14.9437 15.1485V17.8285C14.9437 18.1015 15.0257 18.1975 15.2577 18.1975ZM22.7497 18.1975H25.5117C25.7577 18.1975 25.8537 18.1015 25.8537 17.8285V15.1485C25.8537 14.8885 25.7577 14.7795 25.5117 14.7795H22.7497C22.5177 14.7795 22.4357 14.8885 22.4357 15.1485V17.8285C22.4357 18.1015 22.5177 18.1975 22.7497 18.1975ZM3.7047 23.7485C3.1447 23.7485 2.9117 23.5015 2.9117 22.9555V17.9105C2.9117 17.3495 3.1447 17.1035 3.7047 17.1035H8.7637C9.3107 17.1035 9.5567 17.3495 9.5567 17.9105V22.9555C9.5567 23.5015 9.3107 23.7485 8.7637 23.7485ZM19.0447 21.9575H21.7927C22.0387 21.9575 22.1347 21.8475 22.1347 21.5745V18.8945C22.1347 18.6345 22.0387 18.5395 21.7927 18.5395H19.0447C18.8127 18.5395 18.7307 18.6345 18.7307 18.8945V21.5745C18.7307 21.8475 18.8127 21.9575 19.0447 21.9575ZM4.8397 22.1345H7.6017C7.8337 22.1345 7.9437 22.0395 7.9437 21.7515V19.0855C7.9437 18.8125 7.8337 18.7165 7.6017 18.7165H4.8397C4.6077 18.7165 4.5257 18.8125 4.5257 19.0855V21.7515C4.5257 22.0395 4.6077 22.1345 4.8397 22.1345ZM15.2577 25.7035H18.0057C18.2517 25.7035 18.3477 25.6075 18.3477 25.3205V22.6545C18.3477 22.3945 18.2517 22.2855 18.0057 22.2855H15.2577C15.0257 22.2855 14.9437 22.3945 14.9437 22.6545V25.3205C14.9437 25.6075 15.0257 25.7035 15.2577 25.7035ZM22.7497 25.7035H25.5117C25.7577 25.7035 25.8537 25.6075 25.8537 25.3205V22.6545C25.8537 22.3945 25.7577 22.2855 25.5117 22.2855H22.7497C22.5177 22.2855 22.4357 22.3945 22.4357 22.6545V25.3205C22.4357 25.6075 22.5177 25.7035 22.7497 25.7035Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.759765625 24.759765625"
          className={className}
        >
          <path
            d="              M2.3247 11.2105H8.8727C10.4177 11.2105 11.1977 10.4595 11.1977 8.8455V2.3785C11.1977 0.7515 10.4177 0.0005 8.8727 0.0005H2.3247C0.7927 0.0005 -0.0003 0.7515 -0.0003 2.3785V8.8455C-0.0003 10.4595 0.7927 11.2105 2.3247 11.2105ZM15.8867 11.2105H22.4217C23.9667 11.2105 24.7597 10.4595 24.7597 8.8455V2.3785C24.7597 0.7515 23.9667 0.0005 22.4217 0.0005H15.8867C14.3417 0.0005 13.5487 0.7515 13.5487 2.3785V8.8455C13.5487 10.4595 14.3417 11.2105 15.8867 11.2105ZM2.3517 9.6935C1.7637 9.6935 1.5037 9.4335 1.5037 8.8185V2.3785C1.5037 1.7915 1.7637 1.5175 2.3517 1.5175H8.8317C9.4197 1.5175 9.6937 1.7915 9.6937 2.3785V8.8185C9.6937 9.4335 9.4197 9.6935 8.8317 9.6935ZM15.9137 9.6935C15.3267 9.6935 15.0667 9.4335 15.0667 8.8185V2.3785C15.0667 1.7915 15.3267 1.5175 15.9137 1.5175H22.3947C22.9827 1.5175 23.2427 1.7915 23.2427 2.3785V8.8185C23.2427 9.4335 22.9827 9.6935 22.3947 9.6935ZM4.4847 6.9865H6.6997C6.8907 6.9865 6.9727 6.9045 6.9727 6.6715V4.5255C6.9727 4.3065 6.8907 4.2385 6.6997 4.2385H4.4847C4.2927 4.2385 4.2247 4.3065 4.2247 4.5255V6.6715C4.2247 6.9045 4.2927 6.9865 4.4847 6.9865ZM18.0877 6.9865H20.3167C20.5077 6.9865 20.5767 6.9045 20.5767 6.6715V4.5255C20.5767 4.3065 20.5077 4.2385 20.3167 4.2385H18.0877C17.8967 4.2385 17.8277 4.3065 17.8277 4.5255V6.6715C17.8277 6.9045 17.8967 6.9865 18.0877 6.9865ZM2.3247 24.7595H8.8727C10.4177 24.7595 11.1977 24.0075 11.1977 22.3945V15.9275C11.1977 14.3145 10.4177 13.5625 8.8727 13.5625H2.3247C0.7927 13.5625 -0.0003 14.3145 -0.0003 15.9275V22.3945C-0.0003 24.0075 0.7927 24.7595 2.3247 24.7595ZM14.4097 16.8985H16.6247C16.8167 16.8985 16.8987 16.8305 16.8987 16.5975V14.4515C16.8987 14.2325 16.8167 14.1505 16.6247 14.1505H14.4097C14.2047 14.1505 14.1507 14.2325 14.1507 14.4515V16.5975C14.1507 16.8305 14.2047 16.8985 14.4097 16.8985ZM21.6567 16.8985H23.8847C24.0767 16.8985 24.1587 16.8305 24.1587 16.5975V14.4515C24.1587 14.2325 24.0767 14.1505 23.8847 14.1505H21.6567C21.4647 14.1505 21.4097 14.2325 21.4097 14.4515V16.5975C21.4097 16.8305 21.4647 16.8985 21.6567 16.8985ZM2.3517 23.2555C1.7637 23.2555 1.5037 22.9825 1.5037 22.3805V15.9415C1.5037 15.3395 1.7637 15.0665 2.3517 15.0665H8.8317C9.4197 15.0665 9.6937 15.3395 9.6937 15.9415V22.3805C9.6937 22.9825 9.4197 23.2555 8.8317 23.2555ZM4.4847 20.5355H6.6997C6.8907 20.5355 6.9727 20.4535 6.9727 20.2345V18.0745C6.9727 17.8695 6.8907 17.7875 6.6997 17.7875H4.4847C4.2927 17.7875 4.2247 17.8695 4.2247 18.0745V20.2345C4.2247 20.4535 4.2927 20.5355 4.4847 20.5355ZM18.0747 20.5355H20.2887C20.4807 20.5355 20.5627 20.4535 20.5627 20.2345V18.0745C20.5627 17.8695 20.4807 17.7875 20.2887 17.7875H18.0747C17.8687 17.7875 17.8147 17.8695 17.8147 18.0745V20.2345C17.8147 20.4535 17.8687 20.5355 18.0747 20.5355ZM14.4097 24.1585H16.6247C16.8167 24.1585 16.8987 24.0895 16.8987 23.8575V21.6975C16.8987 21.4925 16.8167 21.4105 16.6247 21.4105H14.4097C14.2047 21.4105 14.1507 21.4925 14.1507 21.6975V23.8575C14.1507 24.0895 14.2047 24.1585 14.4097 24.1585ZM21.6567 24.1585H23.8847C24.0767 24.1585 24.1587 24.0895 24.1587 23.8575V21.6975C24.1587 21.4925 24.0767 21.4105 23.8847 21.4105H21.6567C21.4647 21.4105 21.4097 21.4925 21.4097 21.6975V23.8575C21.4097 24.0895 21.4647 24.1585 21.6567 24.1585Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.525390625 25.525390625"
          className={className}
        >
          <path
            d="              M2.9397 11.6893H8.7497C10.7187 11.6893 11.6897 10.7323 11.6897 8.7093V2.9803C11.6897 0.9573 10.7187 0.0003 8.7497 0.0003H2.9397C0.9707 0.0003 -0.0003 0.9573 -0.0003 2.9803V8.7093C-0.0003 10.7323 0.9707 11.6893 2.9397 11.6893ZM16.7757 11.6893H22.5857C24.5547 11.6893 25.5257 10.7323 25.5257 8.7093V2.9803C25.5257 0.9573 24.5547 0.0003 22.5857 0.0003H16.7757C14.7927 0.0003 13.8357 0.9573 13.8357 2.9803V8.7093C13.8357 10.7323 14.7927 11.6893 16.7757 11.6893ZM2.8847 9.5293C2.3927 9.5293 2.1597 9.2833 2.1597 8.7773V2.9123C2.1597 2.4063 2.3927 2.1603 2.8847 2.1603H8.7907C9.2837 2.1603 9.5297 2.4063 9.5297 2.9123V8.7773C9.5297 9.2833 9.2837 9.5293 8.7907 9.5293ZM16.7207 9.5293C16.2287 9.5293 15.9827 9.2833 15.9827 8.7773V2.9123C15.9827 2.4063 16.2287 2.1603 16.7207 2.1603H22.6407C23.1327 2.1603 23.3657 2.4063 23.3657 2.9123V8.7773C23.3657 9.2833 23.1327 9.5293 22.6407 9.5293ZM4.6207 7.3553H7.0547C7.2597 7.3553 7.3557 7.2593 7.3557 7.0133V4.6623C7.3557 4.4293 7.2597 4.3343 7.0547 4.3343H4.6207C4.4027 4.3343 4.3337 4.4293 4.3337 4.6623V7.0133C4.3337 7.2593 4.4027 7.3553 4.6207 7.3553ZM18.5117 7.3553H20.9457C21.1637 7.3553 21.2457 7.2593 21.2457 7.0133V4.6623C21.2457 4.4293 21.1637 4.3343 20.9457 4.3343H18.5117C18.3067 4.3343 18.2387 4.4293 18.2387 4.6623V7.0133C18.2387 7.2593 18.3067 7.3553 18.5117 7.3553ZM2.9397 25.5253H8.7497C10.7187 25.5253 11.6897 24.5683 11.6897 22.5313V16.8163C11.6897 14.7933 10.7187 13.8363 8.7497 13.8363H2.9397C0.9707 13.8363 -0.0003 14.7933 -0.0003 16.8163V22.5313C-0.0003 24.5683 0.9707 25.5253 2.9397 25.5253ZM14.7797 17.4863H17.2127C17.4317 17.4863 17.5137 17.3903 17.5137 17.1443V14.7793C17.5137 14.5603 17.4317 14.4653 17.2127 14.4653H14.7797C14.5747 14.4653 14.5057 14.5603 14.5057 14.7793V17.1443C14.5057 17.3903 14.5747 17.4863 14.7797 17.4863ZM22.1077 17.4863H24.5407C24.7457 17.4863 24.8277 17.3903 24.8277 17.1443V14.7793C24.8277 14.5603 24.7457 14.4653 24.5407 14.4653H22.1077C21.8887 14.4653 21.8207 14.5603 21.8207 14.7793V17.1443C21.8207 17.3903 21.8887 17.4863 22.1077 17.4863ZM2.8847 23.3653C2.3927 23.3653 2.1597 23.1193 2.1597 22.6133V16.7483C2.1597 16.2283 2.3927 15.9963 2.8847 15.9963H8.7907C9.2837 15.9963 9.5297 16.2283 9.5297 16.7483V22.6133C9.5297 23.1193 9.2837 23.3653 8.7907 23.3653ZM18.4707 21.1363H20.9177C21.1227 21.1363 21.2047 21.0543 21.2047 20.8083V18.4433C21.2047 18.2113 21.1227 18.1293 20.9177 18.1293H18.4707C18.2657 18.1293 18.1977 18.2113 18.1977 18.4433V20.8083C18.1977 21.0543 18.2657 21.1363 18.4707 21.1363ZM4.6207 21.1773H7.0547C7.2597 21.1773 7.3557 21.0953 7.3557 20.8493V18.4843C7.3557 18.2523 7.2597 18.1703 7.0547 18.1703H4.6207C4.4027 18.1703 4.3337 18.2523 4.3337 18.4843V20.8493C4.3337 21.0953 4.4027 21.1773 4.6207 21.1773ZM14.7797 24.8013H17.2127C17.4317 24.8013 17.5137 24.7053 17.5137 24.4593V22.1073C17.5137 21.8753 17.4317 21.7793 17.2127 21.7793H14.7797C14.5747 21.7793 14.5057 21.8753 14.5057 22.1073V24.4593C14.5057 24.7053 14.5747 24.8013 14.7797 24.8013ZM22.1077 24.8013H24.5407C24.7457 24.8013 24.8277 24.7053 24.8277 24.4593V22.1073C24.8277 21.8753 24.7457 21.7793 24.5407 21.7793H22.1077C21.8887 21.7793 21.8207 21.8753 21.8207 22.1073V24.4593C21.8207 24.7053 21.8887 24.8013 22.1077 24.8013Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.169921875 25.169921875"
          className={className}
        >
          <path
            d="              M2.6117 11.4565H8.8457C10.5817 11.4565 11.4567 10.5815 11.4567 8.7775V2.6655C11.4567 0.8615 10.5817 -0.0005 8.8457 -0.0005H2.6117C0.8747 -0.0005 -0.0003 0.8615 -0.0003 2.6655V8.7775C-0.0003 10.5815 0.8747 11.4565 2.6117 11.4565ZM16.3377 11.4565H22.5587C24.2947 11.4565 25.1697 10.5815 25.1697 8.7775V2.6655C25.1697 0.8615 24.2947 -0.0005 22.5587 -0.0005H16.3377C14.5877 -0.0005 13.7127 0.8615 13.7127 2.6655V8.7775C13.7127 10.5815 14.5877 11.4565 16.3377 11.4565ZM2.6387 9.5295C2.1597 9.5295 1.9277 9.2835 1.9277 8.7775V2.6655C1.9277 2.1735 2.1597 1.9275 2.6387 1.9275H8.8047C9.2837 1.9275 9.5297 2.1735 9.5297 2.6655V8.7775C9.5297 9.2835 9.2837 9.5295 8.8047 9.5295ZM16.3657 9.5295C15.8727 9.5295 15.6407 9.2835 15.6407 8.7775V2.6655C15.6407 2.1735 15.8727 1.9275 16.3657 1.9275H22.5317C23.0097 1.9275 23.2427 2.1735 23.2427 2.6655V8.7775C23.2427 9.2835 23.0097 9.5295 22.5317 9.5295ZM4.5527 7.1645H6.8907C7.0817 7.1645 7.1637 7.0815 7.1637 6.8495V4.5805C7.1637 4.3615 7.0817 4.2795 6.8907 4.2795H4.5527C4.3477 4.2795 4.2797 4.3615 4.2797 4.5805V6.8495C4.2797 7.0815 4.3477 7.1645 4.5527 7.1645ZM18.3477 7.1645H20.6857C20.8907 7.1645 20.9727 7.0815 20.9727 6.8495V4.5805C20.9727 4.3615 20.8907 4.2795 20.6857 4.2795H18.3477C18.1567 4.2795 18.0877 4.3615 18.0877 4.5805V6.8495C18.0877 7.0815 18.1567 7.1645 18.3477 7.1645ZM2.6117 25.1695H8.8457C10.5817 25.1695 11.4567 24.3085 11.4567 22.5035V16.3785C11.4567 14.5875 10.5817 13.7125 8.8457 13.7125H2.6117C0.8747 13.7125 -0.0003 14.5875 -0.0003 16.3785V22.5035C-0.0003 24.3085 0.8747 25.1695 2.6117 25.1695ZM14.6427 17.2535H16.9807C17.1717 17.2535 17.2537 17.1715 17.2537 16.9395V14.6695C17.2537 14.4515 17.1717 14.3695 16.9807 14.3695H14.6427C14.4377 14.3695 14.3687 14.4515 14.3687 14.6695V16.9395C14.3687 17.1715 14.4377 17.2535 14.6427 17.2535ZM21.9027 17.2535H24.2407C24.4317 17.2535 24.5137 17.1715 24.5137 16.9395V14.6695C24.5137 14.4515 24.4317 14.3695 24.2407 14.3695H21.9027C21.6977 14.3695 21.6287 14.4515 21.6287 14.6695V16.9395C21.6287 17.1715 21.6977 17.2535 21.9027 17.2535ZM2.6387 23.2425C2.1597 23.2425 1.9277 22.9965 1.9277 22.5035V16.3925C1.9277 15.8865 2.1597 15.6405 2.6387 15.6405H8.8047C9.2837 15.6405 9.5297 15.8865 9.5297 16.3925V22.5035C9.5297 22.9965 9.2837 23.2425 8.8047 23.2425ZM4.5527 20.8905H6.8907C7.0817 20.8905 7.1637 20.8085 7.1637 20.5625V18.3065C7.1637 18.0875 7.0817 18.0055 6.8907 18.0055H4.5527C4.3477 18.0055 4.2797 18.0875 4.2797 18.3065V20.5625C4.2797 20.8085 4.3477 20.8905 4.5527 20.8905ZM18.3067 20.8905H20.6447C20.8357 20.8905 20.9177 20.8085 20.9177 20.5625V18.3065C20.9177 18.0875 20.8357 18.0055 20.6447 18.0055H18.3067C18.1017 18.0055 18.0337 18.0875 18.0337 18.3065V20.5625C18.0337 20.8085 18.1017 20.8905 18.3067 20.8905ZM14.6427 24.5135H16.9807C17.1717 24.5135 17.2537 24.4315 17.2537 24.1995V21.9295C17.2537 21.7105 17.1717 21.6285 16.9807 21.6285H14.6427C14.4377 21.6285 14.3687 21.7105 14.3687 21.9295V24.1995C14.3687 24.4315 14.4377 24.5135 14.6427 24.5135ZM21.9027 24.5135H24.2407C24.4317 24.5135 24.5137 24.4315 24.5137 24.1995V21.9295C24.5137 21.7105 24.4317 21.6285 24.2407 21.6285H21.9027C21.6977 21.6285 21.6287 21.7105 21.6287 21.9295V24.1995C21.6287 24.4315 21.6977 24.5135 21.9027 24.5135Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.78515625 25.78515625"
          className={className}
        >
          <path
            d="              M3.1857 11.881H8.6817C10.8417 11.881 11.8677 10.842 11.8677 8.641V3.227C11.8677 1.039 10.8417 0 8.6817 0H3.1857C1.0387 0 -0.0003 1.039 -0.0003 3.227V8.641C-0.0003 10.842 1.0387 11.881 3.1857 11.881ZM17.1037 11.881H22.5997C24.7457 11.881 25.7847 10.842 25.7847 8.641V3.227C25.7847 1.039 24.7457 0 22.5997 0H17.1037C14.9567 0 13.9177 1.039 13.9177 3.227V8.641C13.9177 10.842 14.9567 11.881 17.1037 11.881ZM3.0767 9.543C2.5707 9.543 2.3377 9.297 2.3377 8.764V3.104C2.3377 2.584 2.5707 2.338 3.0767 2.338H8.7907C9.2967 2.338 9.5427 2.584 9.5427 3.104V8.764C9.5427 9.297 9.2967 9.543 8.7907 9.543ZM17.0077 9.543C16.4887 9.543 16.2557 9.297 16.2557 8.764V3.104C16.2557 2.584 16.4887 2.338 17.0077 2.338H22.7087C23.2147 2.338 23.4477 2.584 23.4477 3.104V8.764C23.4477 9.297 23.2147 9.543 22.7087 9.543ZM4.6757 7.492H7.1777C7.3967 7.492 7.4927 7.396 7.4927 7.15V4.717C7.4927 4.471 7.3967 4.389 7.1777 4.389H4.6757C4.4567 4.389 4.3887 4.471 4.3887 4.717V7.15C4.3887 7.396 4.4567 7.492 4.6757 7.492ZM18.6487 7.492H21.1507C21.3687 7.492 21.4647 7.396 21.4647 7.15V4.717C21.4647 4.471 21.3687 4.389 21.1507 4.389H18.6487C18.4297 4.389 18.3617 4.471 18.3617 4.717V7.15C18.3617 7.396 18.4297 7.492 18.6487 7.492ZM3.1857 25.785H8.6817C10.8417 25.785 11.8677 24.76 11.8677 22.559V17.145C11.8677 14.957 10.8417 13.918 8.6817 13.918H3.1857C1.0387 13.918 -0.0003 14.957 -0.0003 17.145V22.559C-0.0003 24.76 1.0387 25.785 3.1857 25.785ZM14.8887 17.65H17.4047C17.6227 17.65 17.7187 17.568 17.7187 17.309V14.875C17.7187 14.629 17.6227 14.547 17.4047 14.547H14.8887C14.6837 14.547 14.6017 14.629 14.6017 14.875V17.309C14.6017 17.568 14.6837 17.65 14.8887 17.65ZM22.2577 17.65H24.7737C24.9927 17.65 25.0747 17.568 25.0747 17.309V14.875C25.0747 14.629 24.9927 14.547 24.7737 14.547H22.2577C22.0387 14.547 21.9707 14.629 21.9707 14.875V17.309C21.9707 17.568 22.0387 17.65 22.2577 17.65ZM3.0767 23.461C2.5707 23.461 2.3377 23.215 2.3377 22.695V17.021C2.3377 16.502 2.5707 16.256 3.0767 16.256H8.7907C9.2967 16.256 9.5427 16.502 9.5427 17.021V22.695C9.5427 23.215 9.2967 23.461 8.7907 23.461ZM18.6077 21.328H21.1227C21.3417 21.328 21.4237 21.246 21.4237 20.986V18.553C21.4237 18.32 21.3417 18.225 21.1227 18.225H18.6077C18.4027 18.225 18.3207 18.32 18.3207 18.553V20.986C18.3207 21.246 18.4027 21.328 18.6077 21.328ZM4.6757 21.41H7.1777C7.3967 21.41 7.4927 21.314 7.4927 21.068V18.635C7.4927 18.389 7.3967 18.307 7.1777 18.307H4.6757C4.4567 18.307 4.3887 18.389 4.3887 18.635V21.068C4.3887 21.314 4.4567 21.41 4.6757 21.41ZM14.8887 25.006H17.4047C17.6227 25.006 17.7187 24.924 17.7187 24.664V22.23C17.7187 21.998 17.6227 21.902 17.4047 21.902H14.8887C14.6837 21.902 14.6017 21.998 14.6017 22.23V24.664C14.6017 24.924 14.6837 25.006 14.8887 25.006ZM22.2577 25.006H24.7737C24.9927 25.006 25.0747 24.924 25.0747 24.664V22.23C25.0747 21.998 24.9927 21.902 24.7737 21.902H22.2577C22.0387 21.902 21.9707 21.998 21.9707 22.23V24.664C21.9707 24.924 22.0387 25.006 22.2577 25.006Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.19921875 24.19921875"
          className={className}
        >
          <path
            d="              M1.9547 10.8694H8.9137C10.1857 10.8694 10.8687 10.2814 10.8687 8.9004V1.9684C10.8687 0.6014 10.1857 0.0004 8.9137 0.0004H1.9547C0.6837 0.0004 -0.0003 0.6014 -0.0003 1.9684V8.9004C-0.0003 10.2814 0.6837 10.8694 1.9547 10.8694ZM15.2847 10.8694H22.2437C23.5157 10.8694 24.1997 10.2814 24.1997 8.9004V1.9684C24.1997 0.6014 23.5157 0.0004 22.2437 0.0004H15.2847C14.0137 0.0004 13.3297 0.6014 13.3297 1.9684V8.9004C13.3297 10.2814 14.0137 10.8694 15.2847 10.8694ZM1.9827 9.9124C1.2577 9.9124 0.9567 9.6114 0.9567 8.8734V1.9964C0.9567 1.2574 1.2577 0.9574 1.9827 0.9574H8.8727C9.6117 0.9574 9.9117 1.2574 9.9117 1.9964V8.8734C9.9117 9.6114 9.6117 9.9124 8.8727 9.9124ZM15.3267 9.9124C14.5877 9.9124 14.2867 9.6114 14.2867 8.8734V1.9964C14.2867 1.2574 14.5877 0.9574 15.3267 0.9574H22.2167C22.9417 0.9574 23.2427 1.2574 23.2427 1.9964V8.8734C23.2427 9.6114 22.9417 9.9124 22.2167 9.9124ZM4.3887 6.7134H6.4667C6.6447 6.7134 6.7127 6.6444 6.7127 6.4254V4.4294C6.7127 4.2244 6.6447 4.1564 6.4667 4.1564H4.3887C4.2107 4.1564 4.1567 4.2244 4.1567 4.4294V6.4254C4.1567 6.6444 4.2107 6.7134 4.3887 6.7134ZM17.7327 6.7134H19.8107C19.9887 6.7134 20.0707 6.6444 20.0707 6.4254V4.4294C20.0707 4.2244 19.9887 4.1564 19.8107 4.1564H17.7327C17.5547 4.1564 17.4997 4.2244 17.4997 4.4294V6.4254C17.4997 6.6444 17.5547 6.7134 17.7327 6.7134ZM1.9547 24.1994H8.9137C10.1857 24.1994 10.8687 23.6114 10.8687 22.2304V15.2984C10.8687 13.9314 10.1857 13.3304 8.9137 13.3304H1.9547C0.6837 13.3304 -0.0003 13.9314 -0.0003 15.2984V22.2304C-0.0003 23.6114 0.6837 24.1994 1.9547 24.1994ZM14.0957 16.4204H16.1597C16.3517 16.4204 16.4197 16.3514 16.4197 16.1324V14.1234C16.4197 13.9314 16.3517 13.8494 16.1597 13.8494H14.0957C13.9047 13.8494 13.8497 13.9314 13.8497 14.1234V16.1324C13.8497 16.3514 13.9047 16.4204 14.0957 16.4204ZM21.3557 16.4204H23.4197C23.6117 16.4204 23.6797 16.3514 23.6797 16.1324V14.1234C23.6797 13.9314 23.6117 13.8494 23.4197 13.8494H21.3557C21.1637 13.8494 21.1097 13.9314 21.1097 14.1234V16.1324C21.1097 16.3514 21.1637 16.4204 21.3557 16.4204ZM1.9827 23.2424C1.2577 23.2424 0.9567 22.9414 0.9567 22.2034V15.3264C0.9567 14.5884 1.2577 14.2874 1.9827 14.2874H8.8727C9.6117 14.2874 9.9117 14.5884 9.9117 15.3264V22.2034C9.9117 22.9414 9.6117 23.2424 8.8727 23.2424ZM4.3887 20.0564H6.4667C6.6447 20.0564 6.7127 19.9744 6.7127 19.7554V17.7594C6.7127 17.5544 6.6447 17.4864 6.4667 17.4864H4.3887C4.2107 17.4864 4.1567 17.5544 4.1567 17.7594V19.7554C4.1567 19.9744 4.2107 20.0564 4.3887 20.0564ZM17.7597 20.0564H19.8377C20.0157 20.0564 20.0837 19.9744 20.0837 19.7554V17.7594C20.0837 17.5544 20.0157 17.4864 19.8377 17.4864H17.7597C17.5687 17.4864 17.5137 17.5544 17.5137 17.7594V19.7554C17.5137 19.9744 17.5687 20.0564 17.7597 20.0564ZM14.0957 23.6794H16.1597C16.3517 23.6794 16.4197 23.6114 16.4197 23.3924V21.3824C16.4197 21.1914 16.3517 21.1094 16.1597 21.1094H14.0957C13.9047 21.1094 13.8497 21.1914 13.8497 21.3824V23.3924C13.8497 23.6114 13.9047 23.6794 14.0957 23.6794ZM21.3557 23.6794H23.4197C23.6117 23.6794 23.6797 23.6114 23.6797 23.3924V21.3824C23.6797 21.1914 23.6117 21.1094 23.4197 21.1094H21.3557C21.1637 21.1094 21.1097 21.1914 21.1097 21.3824V23.3924C21.1097 23.6114 21.1637 23.6794 21.3557 23.6794Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.92578125 23.912109375"
          className={className}
        >
          <path
            d="              M1.7637 10.691H8.9417C10.0767 10.691 10.7047 10.186 10.7047 8.928V1.764C10.7047 0.506 10.0767 0 8.9417 0H1.7637C0.6287 0 -0.0003 0.506 -0.0003 1.764V8.928C-0.0003 10.186 0.6287 10.691 1.7637 10.691ZM14.9847 10.691H22.1487C23.2967 10.691 23.9257 10.186 23.9257 8.928V1.764C23.9257 0.506 23.2967 0 22.1487 0H14.9847C13.8357 0 13.2207 0.506 13.2207 1.764V8.928C13.2207 10.186 13.8357 10.691 14.9847 10.691ZM1.8047 10.022C0.9847 10.022 0.6697 9.707 0.6697 8.9V1.791C0.6697 0.984 0.9847 0.67 1.8047 0.67H8.9007C9.7067 0.67 10.0217 0.984 10.0217 1.791V8.9C10.0217 9.707 9.7067 10.022 8.9007 10.022ZM15.0117 10.022C14.2047 10.022 13.8907 9.707 13.8907 8.9V1.791C13.8907 0.984 14.2047 0.67 15.0117 0.67H22.1207C22.9277 0.67 23.2427 0.984 23.2427 1.791V8.9C23.2427 9.707 22.9277 10.022 22.1207 10.022ZM4.3477 6.576H6.3437C6.5217 6.576 6.5897 6.508 6.5897 6.303V4.375C6.5897 4.184 6.5217 4.115 6.3437 4.115H4.3477C4.1697 4.115 4.1157 4.184 4.1157 4.375V6.303C4.1157 6.508 4.1697 6.576 4.3477 6.576ZM17.5547 6.576H19.5647C19.7287 6.576 19.7967 6.508 19.7967 6.303V4.375C19.7967 4.184 19.7287 4.115 19.5647 4.115H17.5547C17.3907 4.115 17.3357 4.184 17.3357 4.375V6.303C17.3357 6.508 17.3907 6.576 17.5547 6.576ZM1.7637 23.912H8.9417C10.0767 23.912 10.7047 23.393 10.7047 22.148V14.971C10.7047 13.727 10.0767 13.221 8.9417 13.221H1.7637C0.6287 13.221 -0.0003 13.727 -0.0003 14.971V22.148C-0.0003 23.393 0.6287 23.912 1.7637 23.912ZM13.9317 16.174H15.9277C16.1057 16.174 16.1737 16.105 16.1737 15.887V13.959C16.1737 13.768 16.1057 13.699 15.9277 13.699H13.9317C13.7537 13.699 13.6997 13.768 13.6997 13.959V15.887C13.6997 16.105 13.7537 16.174 13.9317 16.174ZM21.1917 16.174H23.1877C23.3657 16.174 23.4337 16.105 23.4337 15.887V13.959C23.4337 13.768 23.3657 13.699 23.1877 13.699H21.1917C21.0137 13.699 20.9587 13.768 20.9587 13.959V15.887C20.9587 16.105 21.0137 16.174 21.1917 16.174ZM1.8047 23.242C0.9847 23.242 0.6697 22.928 0.6697 22.121V15.012C0.6697 14.205 0.9847 13.891 1.8047 13.891H8.9007C9.7067 13.891 10.0217 14.205 10.0217 15.012V22.121C10.0217 22.928 9.7067 23.242 8.9007 23.242ZM4.3477 19.797H6.3437C6.5217 19.797 6.5897 19.729 6.5897 19.523V17.596C6.5897 17.404 6.5217 17.336 6.3437 17.336H4.3477C4.1697 17.336 4.1157 17.404 4.1157 17.596V19.523C4.1157 19.729 4.1697 19.797 4.3477 19.797ZM17.5957 19.797H19.5917C19.7697 19.797 19.8377 19.729 19.8377 19.523V17.596C19.8377 17.404 19.7697 17.336 19.5917 17.336H17.5957C17.4177 17.336 17.3637 17.404 17.3637 17.596V19.523C17.3637 19.729 17.4177 19.797 17.5957 19.797ZM13.9317 23.434H15.9277C16.1057 23.434 16.1737 23.365 16.1737 23.147V21.219C16.1737 21.027 16.1057 20.959 15.9277 20.959H13.9317C13.7537 20.959 13.6997 21.027 13.6997 21.219V23.147C13.6997 23.365 13.7537 23.434 13.9317 23.434ZM21.1917 23.434H23.1877C23.3657 23.434 23.4337 23.365 23.4337 23.147V21.219C23.4337 21.027 23.3657 20.959 23.1877 20.959H21.1917C21.0137 20.959 20.9587 21.027 20.9587 21.219V23.147C20.9587 23.365 21.0137 23.434 21.1917 23.434Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}