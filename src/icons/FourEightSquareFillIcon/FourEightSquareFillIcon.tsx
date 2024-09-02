import { IconProps } from "../../types"

export default function FourEightSquareFillIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM18.0057 19.3183C15.8457 19.3183 14.3007 18.0603 14.3007 16.0643C14.3007 14.6833 15.1617 13.5213 16.3377 13.2893V13.2343C15.4217 12.9473 14.5747 12.1133 14.5747 10.7733C14.5747 8.8043 16.1737 7.7793 18.0057 7.7793C19.9887 7.7793 21.4377 8.9413 21.4377 10.7873C21.4377 11.9353 20.7407 12.8923 19.6877 13.2343V13.2893C20.9457 13.5493 21.7247 14.7113 21.7247 16.0783C21.7247 18.2113 20.0297 19.3183 18.0057 19.3183ZM10.7597 19.2093C10.0347 19.2093 9.4337 18.7993 9.4337 17.8552V17.1853H7.2597C6.1937 17.1853 5.6327 16.6523 5.6327 15.6403C5.6327 15.1073 5.7697 14.4923 5.9887 13.9043L7.1367 10.6642C7.6427 9.2693 8.1487 7.9023 9.9527 7.9023C11.2657 7.9023 12.0997 8.6273 12.0997 9.9393V14.9703H12.2367C12.9477 14.9703 13.2757 15.3813 13.2757 16.0783C13.2757 16.6383 13.0427 17.1853 12.2227 17.1853H12.0997V17.8552C12.0997 18.8263 11.5257 19.2093 10.7597 19.2093ZM18.0057 12.4142C18.4437 12.4142 18.7027 11.8943 18.7027 11.0742C18.7027 10.2673 18.4437 9.7343 18.0057 9.7343C17.5817 9.7343 17.3357 10.2673 17.3357 11.0742C17.3357 11.8813 17.5817 12.4142 18.0057 12.4142ZM9.5297 15.0523V10.0493H9.4747L7.9157 14.9573V15.0523ZM18.0057 17.3492C18.4707 17.3492 18.7717 16.7613 18.7717 15.8453C18.7717 14.9573 18.4707 14.3693 18.0057 14.3693C17.5277 14.3693 17.2537 14.9573 17.2537 15.8453C17.2537 16.7613 17.5277 17.3492 18.0057 17.3492Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM17.3637 18.9217C15.2577 18.9217 13.6857 17.6777 13.6857 15.6267C13.6857 14.1777 14.5877 13.0427 15.7777 12.7827V12.7417C14.8617 12.4547 13.9867 11.6207 13.9867 10.2397C13.9867 8.2577 15.5857 7.2187 17.3637 7.2187C19.3597 7.2187 20.7537 8.4077 20.7537 10.2397C20.7537 11.4847 19.9887 12.4277 18.9907 12.7417V12.7827C20.1797 13.0427 21.0687 14.1777 21.0687 15.6407C21.0687 17.6637 19.4957 18.9217 17.3637 18.9217ZM10.0767 18.8397C9.4887 18.8397 8.9277 18.4977 8.9277 17.6507V16.6117H6.2617C5.3867 16.6117 4.8677 16.1187 4.8677 15.2717C4.8677 14.7797 4.9767 14.3007 5.2087 13.7267L7.0277 9.3787C7.4787 8.2307 7.9707 7.3007 9.3787 7.3007C10.4867 7.3007 11.2387 7.9297 11.2387 9.0777V14.6977H11.5527C12.1817 14.6977 12.4687 15.0667 12.4687 15.6547C12.4687 16.1597 12.2227 16.6117 11.5387 16.6117H11.2387V17.6507C11.2387 18.4847 10.7187 18.8397 10.0767 18.8397ZM17.3767 12.0177C18.0337 12.0177 18.4027 11.3617 18.4027 10.4867C18.4027 9.6387 18.0467 8.9547 17.3767 8.9547C16.7207 8.9547 16.3657 9.6387 16.3657 10.4867C16.3657 11.3067 16.7067 12.0177 17.3767 12.0177ZM8.9957 14.7517V9.2697H8.9417L6.8767 14.6567V14.7517ZM17.3767 17.1717C18.1157 17.1717 18.5257 16.4197 18.5257 15.4487C18.5257 14.4647 18.1017 13.7537 17.3767 13.7537C16.6247 13.7537 16.2287 14.4917 16.2287 15.4487C16.2287 16.4197 16.6247 17.1717 17.3767 17.1717Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM17.7047 19.1405C15.5727 19.1405 14.0137 17.8825 14.0137 15.8595C14.0137 14.4515 14.8887 13.3025 16.0647 13.0565V13.0015C15.1487 12.7145 14.3007 11.8805 14.3007 10.5275C14.3007 8.5445 15.9007 7.5195 17.7047 7.5195C19.6877 7.5195 21.1227 8.6955 21.1227 10.5415C21.1227 11.7305 20.3847 12.6735 19.3597 13.0015V13.0565C20.5897 13.3165 21.4097 14.4645 21.4097 15.8735C21.4097 17.9515 19.7837 19.1405 17.7047 19.1405ZM10.4457 19.0445C9.7757 19.0445 9.2017 18.6625 9.2017 17.7595V16.9255H6.7947C5.8107 16.9255 5.2777 16.4065 5.2777 15.4765C5.2777 14.9575 5.4007 14.4105 5.6187 13.8225L7.0817 10.0625C7.5607 8.7915 8.0667 7.6285 9.6797 7.6285C10.8967 7.6285 11.6897 8.3125 11.6897 9.5425V14.8475H11.9087C12.5917 14.8475 12.8927 15.2445 12.8927 15.8865C12.8927 16.4195 12.6467 16.9255 11.8947 16.9255H11.6897V17.7595C11.6897 18.6755 11.1427 19.0445 10.4457 19.0445ZM17.7047 12.2365C18.2517 12.2365 18.5527 11.6485 18.5527 10.8005C18.5527 9.9805 18.2517 9.3785 17.7047 9.3785C17.1857 9.3785 16.8707 9.9805 16.8707 10.8005C16.8707 11.6215 17.1717 12.2365 17.7047 12.2365ZM9.2697 14.9165V9.6935H9.2147L7.4237 14.8205V14.9165ZM17.7047 17.2675C18.3067 17.2675 18.6617 16.6115 18.6617 15.6675C18.6617 14.7385 18.2927 14.0825 17.7047 14.0825C17.1037 14.0825 16.7757 14.7385 16.7757 15.6675C16.7757 16.6115 17.1037 17.2675 17.7047 17.2675Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM16.2427 18.2245C14.2457 18.2245 12.8247 16.9255 12.8247 14.9575C12.8247 13.4805 13.6997 12.3325 14.8747 12.0585V12.0315C13.9177 11.7165 13.1247 10.8415 13.1247 9.5015C13.1247 7.6425 14.5337 6.5075 16.2427 6.5075C18.1427 6.5075 19.3867 7.7655 19.3867 9.5155C19.3867 10.7595 18.6207 11.7165 17.6507 12.0315V12.0585C18.7717 12.3185 19.7017 13.4805 19.7017 14.9575C19.7017 16.8435 18.3337 18.2245 16.2427 18.2245ZM9.2557 18.1695C8.8727 18.1695 8.4767 17.9235 8.4767 17.3495V15.6265H5.1547C4.5797 15.6265 4.1977 15.2305 4.1977 14.6835C4.1977 14.3285 4.2657 14.0275 4.4567 13.5895L7.2867 7.6695C7.6157 6.9595 7.9847 6.5485 8.7907 6.5485C9.4887 6.5485 10.0347 6.9455 10.0347 7.7655V14.3005H10.6777C11.1157 14.3005 11.3337 14.5745 11.3337 14.9575C11.3337 15.3395 11.1157 15.6265 10.6777 15.6265H10.0347V17.3495C10.0347 17.8695 9.6797 18.1695 9.2557 18.1695ZM16.2557 11.4985C17.2127 11.4985 17.8007 10.6915 17.8007 9.6525C17.8007 8.6815 17.2817 7.7515 16.2557 7.7515C15.2847 7.7515 14.7107 8.6265 14.7107 9.6525C14.7107 10.6645 15.3267 11.4985 16.2557 11.4985ZM8.5037 14.3285V8.0525H8.4497L5.6057 14.2465V14.3285ZM16.2557 16.9665C17.3907 16.9665 18.0057 15.9685 18.0057 14.8345C18.0057 13.6175 17.3227 12.7555 16.2557 12.7555C15.1207 12.7555 14.4927 13.6855 14.4927 14.8345C14.4927 15.9825 15.1207 16.9665 16.2557 16.9665Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM16.9667 18.6623C14.8887 18.6623 13.3027 17.4183 13.3027 15.3533C13.3027 13.8363 14.2187 12.7283 15.4217 12.4553V12.4143C14.5057 12.1403 13.6177 11.3063 13.6177 9.8843C13.6177 7.8883 15.2027 6.8363 16.9667 6.8363C18.9497 6.8363 20.3297 8.0663 20.3297 9.8983C20.3297 11.1973 19.5097 12.1133 18.5387 12.4143V12.4553C19.6877 12.7283 20.6447 13.8363 20.6447 15.3533C20.6447 17.3083 19.1547 18.6623 16.9667 18.6623ZM9.6387 18.5933C9.1327 18.5933 8.5997 18.2933 8.5997 17.5133V16.2423H5.6187C4.8677 16.2423 4.3747 15.7633 4.3747 15.0253C4.3747 14.5743 4.4707 14.1643 4.7027 13.6033L6.9727 8.5453C7.3827 7.5743 7.8617 6.9183 9.0097 6.9183C9.9937 6.9183 10.6777 7.4783 10.6777 8.5313V14.5063H11.1157C11.7027 14.5063 11.9627 14.8753 11.9627 15.3673C11.9627 15.8593 11.7027 16.2423 11.1157 16.2423H10.6777V17.5133C10.6777 18.2523 10.2127 18.5933 9.6387 18.5933ZM16.9667 11.7443C17.7737 11.7443 18.1977 11.0063 18.1977 10.1033C18.1977 9.2283 17.7867 8.4353 16.9667 8.4353C16.1737 8.4353 15.7367 9.2153 15.7367 10.1033C15.7367 10.9373 16.1467 11.7443 16.9667 11.7443ZM8.6547 14.5473V8.7503H8.5997L6.2207 14.4653V14.5473ZM16.9667 17.0493C17.8967 17.0493 18.3617 16.1873 18.3617 15.1753C18.3617 14.1503 17.8687 13.3433 16.9667 13.3433C16.0507 13.3433 15.5727 14.1773 15.5727 15.1753C15.5727 16.1873 16.0367 17.0493 16.9667 17.0493Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM16.7347 18.5115C14.6697 18.5115 13.0837 17.2815 13.0837 15.1895C13.0837 13.6585 14.0137 12.5505 15.2167 12.2775V12.2365C14.3147 11.9625 13.3987 11.1155 13.3987 9.6795C13.3987 7.6975 14.9847 6.6305 16.7347 6.6305C18.7307 6.6305 20.0837 7.8615 20.0837 9.6935C20.0837 11.0335 19.2367 11.9495 18.2927 12.2365V12.2775C19.4137 12.5375 20.3987 13.6445 20.3987 15.1895C20.3987 17.1175 18.9627 18.5115 16.7347 18.5115ZM9.3927 18.4435C8.9417 18.4435 8.4217 18.1835 8.4217 17.4315V16.0375H5.2637C4.5797 16.0375 4.1017 15.5725 4.1017 14.8885C4.1017 14.4515 4.1977 14.0815 4.4157 13.5355L6.9317 8.0665C7.3277 7.1915 7.7927 6.6855 8.7907 6.6855C9.7207 6.6855 10.3637 7.2325 10.3637 8.2165V14.3965H10.8687C11.4297 14.3965 11.6617 14.7515 11.6617 15.2035C11.6617 15.6815 11.4027 16.0375 10.8687 16.0375H10.3637V17.4315C10.3637 18.1155 9.9257 18.4435 9.3927 18.4435ZM16.7347 11.5935C17.6227 11.5935 18.0877 10.8145 18.0877 9.8845C18.0877 8.9825 17.6507 8.1485 16.7347 8.1485C15.8597 8.1485 15.3947 8.9825 15.3947 9.8845C15.3947 10.7185 15.8317 11.5935 16.7347 11.5935ZM8.4627 14.4375V8.4625H8.4087L5.8517 14.3415V14.4375ZM16.7347 16.9805C17.7737 16.9805 18.2797 16.0645 18.2797 15.0255C18.2797 13.9585 17.7327 13.1115 16.7347 13.1115C15.7227 13.1115 15.2027 14.0135 15.2027 15.0255C15.2027 16.0645 15.7087 16.9805 16.7347 16.9805Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM17.1307 18.771C15.0387 18.771 13.4667 17.527 13.4667 15.477C13.4667 13.986 14.3687 12.865 15.5727 12.605V12.551C14.6567 12.277 13.7817 11.443 13.7817 10.035C13.7817 8.053 15.3677 7 17.1307 7C19.1267 7 20.5077 8.217 20.5077 10.049C20.5077 11.32 19.7147 12.25 18.7307 12.551V12.605C19.9067 12.865 20.8227 13.986 20.8227 15.477C20.8227 17.459 19.3047 18.771 17.1307 18.771ZM9.8297 18.703C9.2837 18.703 8.7367 18.389 8.7367 17.568V16.406H5.8927C5.0997 16.406 4.5937 15.914 4.5937 15.135C4.5937 14.656 4.6897 14.219 4.9217 13.658L6.9997 8.9C7.4237 7.861 7.9027 7.082 9.1597 7.082C10.2127 7.082 10.9237 7.684 10.9237 8.764V14.588H11.3067C11.9087 14.588 12.1817 14.957 12.1817 15.49C12.1817 15.996 11.9217 16.406 11.2927 16.406H10.9237V17.568C10.9237 18.348 10.4317 18.703 9.8297 18.703ZM17.1447 11.854C17.8827 11.854 18.2927 11.156 18.2927 10.268C18.2927 9.406 17.8967 8.654 17.1447 8.654C16.4067 8.654 16.0097 9.393 16.0097 10.268C16.0097 11.102 16.3927 11.854 17.1447 11.854ZM8.7907 14.643V8.982H8.7497L6.5077 14.547V14.643ZM17.1447 17.104C17.9927 17.104 18.4297 16.283 18.4297 15.299C18.4297 14.287 17.9647 13.521 17.1447 13.521C16.2967 13.521 15.8597 14.314 15.8597 15.299C15.8597 16.297 16.2967 17.104 17.1447 17.104Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM9.0777 17.7734C8.7907 17.7734 8.5587 17.5824 8.5587 17.2264V15.0664H5.0177C4.5797 15.0664 4.3207 14.7794 4.3207 14.3964C4.3207 14.1504 4.3747 13.9314 4.5117 13.6444L7.7657 7.1234C7.9977 6.6304 8.2437 6.3304 8.7777 6.3304C9.1877 6.3304 9.5837 6.5484 9.5837 7.1644V14.1504H10.4177C10.6917 14.1504 10.8827 14.3414 10.8827 14.6014C10.8827 14.8754 10.7187 15.0664 10.4177 15.0664H9.5837V17.2264C9.5837 17.5414 9.3517 17.7734 9.0777 17.7734ZM15.5997 17.8284C13.6857 17.8284 12.4547 16.4334 12.4547 14.6154C12.4547 13.2344 13.2757 12.0314 14.4377 11.7574V11.7444C13.3987 11.3884 12.7697 10.4454 12.7697 9.2424C12.7697 7.5474 13.9457 6.3304 15.5997 6.3304C17.3637 6.3304 18.4567 7.6294 18.4567 9.2554C18.4567 10.4044 17.8147 11.3884 16.8027 11.7444V11.7574C17.9237 12.0174 18.7577 13.2484 18.7577 14.6154C18.7577 16.4614 17.4997 17.8284 15.5997 17.8284ZM15.6137 11.3614C16.6527 11.3614 17.4177 10.5004 17.4177 9.3244C17.4177 8.2574 16.8027 7.2184 15.6137 7.2184C14.5337 7.2184 13.8087 8.1344 13.8087 9.3244C13.8087 10.5684 14.6427 11.3614 15.6137 11.3614ZM8.5727 14.1644V7.4924H8.5177L5.2907 14.1094V14.1644ZM15.6137 16.9394C16.8987 16.9394 17.6637 15.8324 17.6637 14.5604C17.6637 13.1384 16.7757 12.2504 15.6137 12.2504C14.3417 12.2504 13.5627 13.2614 13.5627 14.5604C13.5627 15.8454 14.3277 16.9394 15.6137 16.9394Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM8.9827 17.568C8.7497 17.568 8.5997 17.391 8.5997 17.158V14.766H4.9357C4.5797 14.766 4.3747 14.547 4.3747 14.246C4.3747 14.055 4.4297 13.877 4.5257 13.658L7.9977 6.836C8.1897 6.453 8.3807 6.221 8.7637 6.221C9.0367 6.221 9.3657 6.344 9.3657 6.85V14.068H10.2947C10.4727 14.068 10.6507 14.205 10.6507 14.41C10.6507 14.629 10.5137 14.766 10.2947 14.766H9.3657V17.158C9.3657 17.363 9.1877 17.568 8.9827 17.568ZM15.2717 17.623C13.3987 17.623 12.2777 16.188 12.2777 14.451C12.2777 13.111 13.0567 11.867 14.2187 11.607V11.594C13.1247 11.225 12.5917 10.24 12.5917 9.105C12.5917 7.492 13.6447 6.234 15.2717 6.234C16.9667 6.234 17.9787 7.547 17.9787 9.105C17.9787 10.213 17.3907 11.225 16.3657 11.594V11.607C17.4997 11.867 18.2797 13.125 18.2797 14.451C18.2797 16.256 17.0767 17.623 15.2717 17.623ZM15.2847 11.279C16.3657 11.279 17.2127 10.404 17.2127 9.16C17.2127 8.039 16.5427 6.932 15.2847 6.932C14.1507 6.932 13.3577 7.875 13.3577 9.16C13.3577 10.514 14.2867 11.279 15.2847 11.279ZM8.5997 14.068V7.191H8.5447L5.1267 14.041V14.068ZM15.2847 16.926C16.6527 16.926 17.4867 15.764 17.4867 14.41C17.4867 12.893 16.4887 12.004 15.2847 12.004C13.9317 12.004 13.0707 13.029 13.0707 14.41C13.0707 15.777 13.9177 16.926 15.2847 16.926Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
