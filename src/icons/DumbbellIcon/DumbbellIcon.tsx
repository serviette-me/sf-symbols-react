import { IconProps } from "../../types"

export default function DumbbellIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.958984375 24.69140625"
          className={className}
        >
          <path
            d="              M3.7047 20.8085H5.1137C5.4137 23.1325 7.3147 24.6915 9.9667 24.6915H10.8147C13.7407 24.6915 15.7367 22.8185 15.7367 20.1255V17.0215H26.2227V20.1255C26.2227 22.8185 28.2187 24.6915 31.1307 24.6915H31.9927C34.6447 24.6915 36.5317 23.1325 36.8457 20.8085H38.2537C40.3317 20.8085 41.9587 19.1545 41.9587 17.1175V7.5745C41.9587 5.4965 40.3317 3.8825 38.2537 3.8825H36.8457C36.5317 1.5585 34.6447 0.0005 32.0057 0.0005H31.1307C28.2187 0.0005 26.2227 1.8735 26.2227 4.5805V7.6565H15.7367V4.5805C15.7367 1.8735 13.7407 0.0005 10.8147 0.0005H9.9527C7.3147 0.0005 5.4277 1.5585 5.1137 3.8825H3.7047C1.6267 3.8825 -0.0003 5.4965 -0.0003 7.5745V17.1175C-0.0003 19.1545 1.6267 20.8085 3.7047 20.8085ZM10.0077 20.5355C9.5297 20.5355 9.2147 20.2485 9.2147 19.7965V4.8945C9.2147 4.4575 9.5297 4.1565 9.9937 4.1565H10.7867C11.2657 4.1565 11.5797 4.4575 11.5797 4.8945V19.7965C11.5797 20.2485 11.2657 20.5355 10.7867 20.5355ZM31.1717 20.5355C30.6937 20.5355 30.3657 20.2485 30.3657 19.7965V4.8945C30.3657 4.4575 30.6937 4.1565 31.1717 4.1565H31.9647C32.4297 4.1565 32.7437 4.4575 32.7437 4.8945V19.7965C32.7437 20.2485 32.4297 20.5355 31.9517 20.5355ZM37.6247 7.8345C37.8577 7.8345 37.9937 7.9705 37.9937 8.2035V16.4605C37.9937 16.6935 37.8577 16.8305 37.6247 16.8305H36.8867V7.8345ZM4.3207 16.8305C4.0877 16.8305 3.9647 16.6935 3.9647 16.4605V8.2035C3.9647 7.9705 4.0877 7.8345 4.3207 7.8345H5.0727V16.8305ZM15.7367 12.8655V11.8125H26.2227V12.8655Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.267578125 22.44921875"
          className={className}
        >
          <path
            d="              M3.1307 19.0044H4.3337C4.6207 21.1364 6.1657 22.4494 8.4767 22.4494H9.3927C11.9907 22.4494 13.6587 20.8364 13.6587 18.2934V15.1484H24.6097V18.2934C24.6097 20.8364 26.2777 22.4494 28.8747 22.4494H29.7907C32.1017 22.4494 33.6597 21.1364 33.9337 19.0044H35.1367C36.9007 19.0044 38.2677 17.6094 38.2677 15.8864V6.5764C38.2677 4.8124 36.9007 3.4314 35.1367 3.4314H33.9337C33.6467 1.3124 32.1287 0.0004 29.8727 0.0004H28.8617C26.2637 0.0004 24.6097 1.6274 24.6097 4.1704V7.2874H13.6587V4.1704C13.6587 1.6274 12.0037 0.0004 9.4067 0.0004H8.3947C6.1527 0.0004 4.6207 1.3124 4.3337 3.4314H3.1307C1.3677 3.4314 -0.0003 4.8124 -0.0003 6.5764V15.8864C-0.0003 17.6094 1.3677 19.0044 3.1307 19.0044ZM8.5177 19.3454C7.8207 19.3454 7.3967 18.8944 7.3967 18.1294V4.3344C7.3967 3.5684 7.7927 3.1034 8.4357 3.1034H9.3787C10.1037 3.1034 10.5547 3.5684 10.5547 4.3344V18.1294C10.5547 18.8944 10.0897 19.3454 9.3517 19.3454ZM28.9157 19.3454C28.1777 19.3454 27.7267 18.8944 27.7267 18.1294V4.3344C27.7267 3.5684 28.1777 3.1034 28.9027 3.1034H29.8317C30.4747 3.1034 30.8707 3.5684 30.8707 4.3344V18.1294C30.8707 18.8944 30.4477 19.3454 29.7497 19.3454ZM34.8227 6.3844C35.1227 6.3844 35.3277 6.5894 35.3277 6.9044V15.5314C35.3277 15.8454 35.1227 16.0504 34.8227 16.0504H33.9887V6.3844ZM3.4587 16.0504C3.1447 16.0504 2.9397 15.8454 2.9397 15.5314V6.9044C2.9397 6.5894 3.1447 6.3844 3.4587 6.3844H4.2927V16.0504ZM13.6587 12.0454V10.3904H24.6097V12.0454Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.22265625 23.638671875"
          className={className}
        >
          <path
            d="              M3.4317 19.9473H4.7437C5.0447 22.1893 6.7817 23.6383 9.2697 23.6383H10.1447C12.9067 23.6383 14.7517 21.8883 14.7517 19.2503V16.1333H25.4567V19.2503C25.4567 21.8883 27.3027 23.6383 30.0777 23.6383H30.9527C33.4417 23.6383 35.1777 22.1893 35.4787 19.9473H36.7777C38.7187 19.9473 40.2227 18.4163 40.2227 16.5293V7.0953C40.2227 5.1683 38.7187 3.6643 36.7777 3.6643H35.4647C35.1637 1.4353 33.4547 0.0003 30.9937 0.0003H30.0647C27.3027 0.0003 25.4567 1.7503 25.4567 4.3883V7.4783H14.7517V4.3883C14.7517 1.7503 12.9197 0.0003 10.1587 0.0003H9.2287C6.7677 0.0003 5.0447 1.4353 4.7437 3.6643H3.4317C1.5037 3.6643 -0.0003 5.1683 -0.0003 7.0953V16.5293C-0.0003 18.4163 1.5037 19.9473 3.4317 19.9473ZM9.2967 19.9743C8.7227 19.9743 8.3537 19.6053 8.3537 19.0043V4.6343C8.3537 4.0333 8.7087 3.6503 9.2557 3.6503H10.1177C10.7187 3.6503 11.1017 4.0333 11.1017 4.6343V19.0043C11.1017 19.6053 10.7187 19.9743 10.1177 19.9743ZM30.1057 19.9743C29.5037 19.9743 29.1207 19.6053 29.1207 19.0043V4.6343C29.1207 4.0333 29.5037 3.6503 30.1057 3.6503H30.9667C31.4997 3.6503 31.8557 4.0333 31.8557 4.6343V19.0043C31.8557 19.6053 31.4867 19.9743 30.9117 19.9743ZM36.2987 7.1503C36.5727 7.1503 36.7367 7.3143 36.7367 7.5883V16.0233C36.7367 16.2833 36.5727 16.4473 36.2987 16.4473H35.5197V7.1503ZM3.9097 16.4473C3.6507 16.4473 3.4867 16.2833 3.4867 16.0233V7.5883C3.4867 7.3143 3.6507 7.1503 3.9097 7.1503H4.7027V16.4473ZM14.7517 12.4683V11.1423H25.4567V12.4683Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.2109375 19.455078125"
          className={className}
        >
          <path
            d="              M2.3107 16.5431H3.1587C3.2817 18.3751 4.4437 19.4551 6.2887 19.4551H7.2457C9.2427 19.4551 10.4587 18.2521 10.4587 16.2421V12.6461H21.7517V16.2421C21.7517 18.2521 22.9687 19.4551 24.9647 19.4551H25.9217C27.7677 19.4551 28.9297 18.3751 29.0387 16.5431H29.9007C31.2127 16.5431 32.2107 15.5451 32.2107 14.2461V5.2231C32.2107 3.8961 31.2127 2.8981 29.9007 2.8981H29.0387C28.9157 1.0941 27.8227 0.0001 26.0727 0.0001H24.8967C22.9277 0.0001 21.7517 1.2301 21.7517 3.2541V6.8081H10.4587V3.2541C10.4587 1.2301 9.2837 0.0001 7.3147 0.0001H6.1387C4.3887 0.0001 3.2947 1.0941 3.1717 2.8981H2.3107C0.9977 2.8981 -0.0003 3.8961 -0.0003 5.2231V14.2461C-0.0003 15.5451 0.9977 16.5431 2.3107 16.5431ZM6.3167 17.8551C5.3597 17.8551 4.7577 17.2401 4.7577 16.2421V3.2541C4.7577 2.2421 5.3047 1.5991 6.1657 1.5991H7.2737C8.2437 1.5991 8.8597 2.2421 8.8597 3.2541V16.2421C8.8597 17.2401 8.2167 17.8551 7.2047 17.8551ZM25.0057 17.8551C23.9937 17.8551 23.3517 17.2401 23.3517 16.2421V3.2541C23.3517 2.2421 23.9667 1.5991 24.9377 1.5991H26.0447C26.9067 1.5991 27.4527 2.2421 27.4527 3.2541V16.2421C27.4527 17.2401 26.8517 17.8551 25.8947 17.8551ZM29.8867 4.4161C30.3517 4.4161 30.6937 4.7711 30.6937 5.2641V14.2191C30.6937 14.6831 30.3517 15.0391 29.8867 15.0391H29.0527V4.4161ZM2.3247 15.0391C1.8597 15.0391 1.5037 14.6831 1.5037 14.2191V5.2641C1.5037 4.7711 1.8597 4.4161 2.3247 4.4161H3.1587V15.0391ZM10.4587 11.0471V8.4081H21.7517V11.0471Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.916015625 21.02734375"
          className={className}
        >
          <path
            d="              M2.7757 17.8554H3.8417C4.0877 19.8514 5.4417 21.0274 7.5337 21.0274H8.4767C10.8827 21.0274 12.3317 19.5644 12.3317 17.1174V13.9594H23.5837V17.1174C23.5837 19.5644 25.0337 21.0274 27.4397 21.0274H28.3827C30.4747 21.0274 31.8147 19.8514 32.0747 17.8554H33.1407C34.6997 17.8554 35.9157 16.6384 35.9157 15.0934V5.9334C35.9157 4.3754 34.6997 3.1584 33.1407 3.1584H32.0747C31.8147 1.1754 30.5157 0.0004 28.5057 0.0004H27.4117C25.0197 0.0004 23.5837 1.4764 23.5837 3.9234V7.0544H12.3317V3.9234C12.3317 1.4764 10.8967 0.0004 8.5037 0.0004H7.3967C5.3867 0.0004 4.1017 1.1754 3.8417 3.1584H2.7757C1.2027 3.1584 -0.0003 4.3754 -0.0003 5.9334V15.0934C-0.0003 16.6384 1.2027 17.8554 2.7757 17.8554ZM7.5607 18.5934C6.7267 18.5934 6.2347 18.0194 6.2347 17.0624V3.9784C6.2347 3.0214 6.6857 2.4334 7.4377 2.4334H8.4627C9.3517 2.4334 9.8847 3.0214 9.8847 3.9784V17.0624C9.8847 18.0194 9.3377 18.5934 8.4497 18.5934ZM27.4667 18.5934C26.5647 18.5934 26.0177 18.0194 26.0177 17.0624V3.9784C26.0177 3.0214 26.5647 2.4334 27.4397 2.4334H28.4787C29.2167 2.4334 29.6817 3.0214 29.6817 3.9784V17.0624C29.6817 18.0194 29.1757 18.5934 28.3417 18.5934ZM33.0177 5.4554C33.3597 5.4554 33.6187 5.7284 33.6187 6.0704V14.9574C33.6187 15.2984 33.3597 15.5584 33.0177 15.5584H32.1157V5.4554ZM2.8987 15.5584C2.5427 15.5584 2.2967 15.2984 2.2967 14.9574V6.0704C2.2967 5.7284 2.5427 5.4554 2.8987 5.4554H3.7867V15.5584ZM12.3317 11.5254V9.5024H23.5837V11.5254Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.58984375 20.234375"
          className={className}
        >
          <path
            d="              M2.5707 17.213H3.5547C3.8007 19.141 5.0177 20.234 6.9997 20.234H7.9707C10.2537 20.234 11.5797 18.867 11.5797 16.475V13.289H23.0097V16.475C23.0097 18.867 24.3357 20.234 26.6187 20.234H27.5897C29.5587 20.234 30.7887 19.141 31.0347 17.213H32.0197C33.4687 17.213 34.5897 16.092 34.5897 14.656V5.578C34.5897 4.129 33.4687 3.008 32.0197 3.008H31.0217C30.7887 1.094 29.6137 0 27.7407 0H26.5917C24.3087 0 23.0097 1.395 23.0097 3.787V6.932H11.5797V3.787C11.5797 1.395 10.2677 0 7.9977 0H6.8357C4.9627 0 3.8007 1.094 3.5547 3.008H2.5707C1.1207 3.008 -0.0003 4.129 -0.0003 5.578V14.656C-0.0003 16.092 1.1207 17.213 2.5707 17.213ZM7.0277 18.17C6.1247 18.17 5.5777 17.541 5.5777 16.475V3.787C5.5777 2.707 6.0707 2.064 6.8767 2.064H7.9567C8.9277 2.064 9.5157 2.707 9.5157 3.787V16.475C9.5157 17.541 8.9277 18.17 7.9297 18.17ZM26.6597 18.17C25.6617 18.17 25.0747 17.541 25.0747 16.475V3.787C25.0747 2.707 25.6487 2.064 26.6327 2.064H27.7127C28.5197 2.064 29.0117 2.707 29.0117 3.787V16.475C29.0117 17.541 28.4647 18.17 27.5627 18.17ZM32.0057 4.936C32.3747 4.936 32.6617 5.236 32.6617 5.619V14.629C32.6617 14.998 32.3747 15.285 32.0057 15.285H31.0767V4.936ZM2.5837 15.285C2.2017 15.285 1.9277 14.998 1.9277 14.629V5.619C1.9277 5.236 2.2017 4.936 2.5837 4.936H3.5137V15.285ZM11.5797 11.225V8.996H23.0097V11.225Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.927734375 21.65625"
          className={className}
        >
          <path
            d="              M2.9257 18.3609H4.0467C4.3207 20.4119 5.7557 21.6559 7.9437 21.6559H8.8727C11.3617 21.6559 12.9067 20.1249 12.9067 17.6369V14.4789H24.0217V17.6369C24.0217 20.1249 25.5667 21.6559 28.0547 21.6559H28.9847C31.1717 21.6559 32.6077 20.4119 32.8807 18.3609H34.0017C35.6567 18.3609 36.9277 17.0629 36.9277 15.4489V6.2209C36.9277 4.5669 35.6567 3.2809 34.0017 3.2809H32.8807C32.6077 1.2439 31.2127 -0.0001 29.0937 -0.0001H28.0407C25.5527 -0.0001 24.0217 1.5449 24.0217 4.0469V7.1639H12.9067V4.0469C12.9067 1.5449 11.3747 -0.0001 8.8867 -0.0001H7.8337C5.7147 -0.0001 4.3207 1.2439 4.0607 3.2809H2.9257C1.2847 3.2809 -0.0003 4.5669 -0.0003 6.2209V15.4489C-0.0003 17.0629 1.2847 18.3609 2.9257 18.3609ZM7.9707 18.9219C7.2047 18.9219 6.7407 18.4019 6.7407 17.5269V4.1429C6.7407 3.2679 7.1637 2.7339 7.8617 2.7339H8.8597C9.6797 2.7339 10.1717 3.2679 10.1717 4.1429V17.5269C10.1717 18.4019 9.6657 18.9219 8.8317 18.9219ZM28.0957 18.9219C27.2617 18.9219 26.7557 18.4019 26.7557 17.5269V4.1429C26.7557 3.2679 27.2477 2.7339 28.0687 2.7339H29.0667C29.7637 2.7339 30.2017 3.2679 30.2017 4.1429V17.5269C30.2017 18.4019 29.7227 18.9219 28.9567 18.9219ZM33.7967 5.8649C34.1247 5.8649 34.3577 6.1109 34.3577 6.4399V15.2169C34.3577 15.5449 34.1247 15.7769 33.7967 15.7769H32.9217V5.8649ZM3.1447 15.7769C2.8027 15.7769 2.5707 15.5449 2.5707 15.2169V6.4399C2.5707 6.1109 2.8027 5.8649 3.1447 5.8649H4.0057V15.7769ZM12.9067 11.7579V9.8849H24.0217V11.7579Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.06640625 18.4296875"
          className={className}
        >
          <path
            d="              M1.9687 15.6683H2.6797V15.9413C2.6797 17.4453 3.7457 18.4293 5.3457 18.4293H6.2887C7.9027 18.4293 8.9827 17.4453 8.9827 15.9413V11.7853H20.0837V15.9413C20.0837 17.4453 21.1637 18.4293 22.7777 18.4293H23.7207C25.3207 18.4293 26.3867 17.4453 26.3867 15.9413V15.6683H27.0977C28.2457 15.6683 29.0667 14.8343 29.0667 13.7133V4.7583C29.0667 3.5953 28.2457 2.7613 27.0977 2.7613H26.3867V2.5293C26.3867 1.0113 25.3887 0.0003 23.8707 0.0003H22.6547C21.1097 0.0003 20.0837 1.0113 20.0837 2.5293V6.6583H8.9827V2.5293C8.9827 1.0113 7.9707 0.0003 6.4117 0.0003H5.2087C3.6777 0.0003 2.6797 1.0113 2.6797 2.5293V2.7613H1.9687C0.8337 2.7613 -0.0003 3.5953 -0.0003 4.7583V13.7133C-0.0003 14.8343 0.8337 15.6683 1.9687 15.6683ZM5.3867 17.4453C4.3617 17.4453 3.6637 16.8433 3.6637 15.9413V2.5293C3.6637 1.6133 4.3067 0.9843 5.2367 0.9843H6.3707C7.3417 0.9843 7.9977 1.6133 7.9977 2.5293V15.9413C7.9977 16.8433 7.3007 17.4453 6.2617 17.4453ZM22.8047 17.4453C21.7797 17.4453 21.0687 16.8433 21.0687 15.9413V2.5293C21.0687 1.6133 21.7247 0.9843 22.6957 0.9843H23.8297C24.7597 0.9843 25.4027 1.6133 25.4027 2.5293V15.9413C25.4027 16.8433 24.7047 17.4453 23.6937 17.4453ZM27.0707 3.7183C27.6857 3.7183 28.1097 4.1703 28.1097 4.7853V13.6723C28.1097 14.2733 27.6857 14.7113 27.0707 14.7113H26.3867V3.7183ZM1.9957 14.7113C1.3947 14.7113 0.9567 14.2733 0.9567 13.6723V4.7853C0.9567 4.1703 1.3947 3.7183 1.9957 3.7183H2.6797V14.7113ZM8.9827 10.8003V7.6563H20.0837V10.8003Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.453125 17.91015625"
          className={className}
        >
          <path
            d="              M1.8047 15.2165H2.4477V15.7905C2.4477 17.0355 3.4457 17.9105 4.8677 17.9105H5.8107C7.2187 17.9105 8.2307 17.0355 8.2307 15.7905V11.3335H19.2367V15.7905C19.2367 17.0355 20.2347 17.9105 21.6567 17.9105H22.5997C24.0077 17.9105 25.0197 17.0355 25.0197 15.7905V15.2165H25.6617C26.7147 15.2165 27.4527 14.4645 27.4527 13.4255V4.5115C27.4527 3.4455 26.7147 2.6935 25.6617 2.6935H25.0197V2.1605C25.0197 0.8885 24.0767 -0.0005 22.7367 -0.0005H21.5057C20.1657 -0.0005 19.2367 0.8885 19.2367 2.1605V6.5895H8.2307V2.1605C8.2307 0.8885 7.2867 -0.0005 5.9477 -0.0005H4.7307C3.3767 -0.0005 2.4477 0.8885 2.4477 2.1605V2.6935H1.8047C0.7387 2.6935 -0.0003 3.4455 -0.0003 4.5115V13.4255C-0.0003 14.4645 0.7387 15.2165 1.8047 15.2165ZM4.8947 17.2405C3.8557 17.2405 3.1177 16.6525 3.1177 15.7905V2.1605C3.1177 1.2985 3.8007 0.6695 4.7577 0.6695H5.9197C6.8767 0.6695 7.5607 1.2985 7.5607 2.1605V15.7905C7.5607 16.6525 6.8227 17.2405 5.7697 17.2405ZM21.6837 17.2405C20.6447 17.2405 19.9067 16.6525 19.9067 15.7905V2.1605C19.9067 1.2985 20.5897 0.6695 21.5467 0.6695H22.6957C23.6657 0.6695 24.3497 1.2985 24.3497 2.1605V15.7905C24.3497 16.6525 23.6117 17.2405 22.5587 17.2405ZM25.6347 3.3765C26.3047 3.3765 26.7837 3.8695 26.7837 4.5525V13.3985C26.7837 14.0685 26.3047 14.5335 25.6347 14.5335H25.0197V3.3765ZM1.8187 14.5335C1.1487 14.5335 0.6697 14.0685 0.6697 13.3985V4.5525C0.6697 3.8695 1.1487 3.3765 1.8187 3.3765H2.4477V14.5335ZM8.2307 10.6645V7.2595H19.2367V10.6645Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
