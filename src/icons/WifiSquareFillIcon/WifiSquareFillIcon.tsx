import { IconProps } from "../../types"

export default function WifiSquareFillIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM6.1527 12.8513L5.1137 11.7853C4.8947 11.5523 4.8677 11.2113 5.0727 10.9653C6.9457 8.6273 10.3497 7.1093 13.7127 7.1093C17.0897 7.1093 20.4937 8.6273 22.3537 10.9653C22.5727 11.2113 22.5447 11.5523 22.3267 11.7853L21.2867 12.8513C20.9997 13.1113 20.6037 13.1113 20.3297 12.8513C18.5937 11.0063 16.3107 10.0213 13.7127 10.0213C11.1567 10.0213 8.8867 10.9782 7.1227 12.8383C6.8357 13.1383 6.4257 13.1383 6.1527 12.8513ZM9.2287 15.7773L8.0527 14.6833C7.7927 14.4653 7.7797 14.1233 7.9847 13.8773C9.2427 12.4142 11.4437 11.4983 13.7127 11.4983C15.9827 11.4983 18.1977 12.4142 19.4547 13.8773C19.6597 14.1233 19.6467 14.4653 19.3867 14.6833L18.2107 15.7773C17.9377 16.0373 17.5407 16.0373 17.2817 15.7503C16.3517 14.8063 15.0117 14.2463 13.7127 14.2463C12.4137 14.2463 11.1017 14.8063 10.1857 15.7503C9.9117 16.0233 9.5157 16.0373 9.2287 15.7773ZM13.7127 20.0023C13.4527 20.0023 13.2347 19.8653 12.9067 19.5513L11.1017 17.8143C10.8687 17.5953 10.8147 17.2673 10.9647 17.0493C11.6077 16.1873 12.6737 15.6683 13.7127 15.6683C14.7657 15.6683 15.7637 16.1333 16.4197 16.9533C16.6247 17.1993 16.6117 17.5543 16.3657 17.8143L14.5607 19.5513C14.2327 19.8653 13.9727 20.0023 13.7127 20.0023Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM5.4687 12.2637L4.4157 11.1837C4.2247 10.9787 4.1977 10.6917 4.3747 10.4587C6.2757 8.1207 9.7347 6.5757 13.1657 6.5757C16.5837 6.5757 20.0427 8.1207 21.9437 10.4587C22.1207 10.6917 22.0937 10.9787 21.9027 11.1837L20.8637 12.2497C20.6037 12.4827 20.2757 12.4957 20.0297 12.2637C18.2387 10.3357 15.8597 9.3237 13.1657 9.3237C10.4867 9.3237 8.1207 10.3357 6.3167 12.2497C6.0567 12.5097 5.6877 12.5097 5.4687 12.2637ZM8.6137 15.3257L7.4377 14.1917C7.2187 13.9867 7.1917 13.6987 7.3827 13.4807C8.6547 11.9767 10.8687 11.0197 13.1657 11.0197C15.4497 11.0197 17.6777 11.9767 18.9497 13.4807C19.1267 13.6857 19.1137 13.9867 18.8947 14.1917L17.7047 15.3257C17.4587 15.5727 17.1307 15.5727 16.8987 15.3127C15.9417 14.3007 14.5197 13.6857 13.1657 13.6857C11.7847 13.6857 10.3907 14.3007 9.4607 15.2987C9.2017 15.5727 8.8597 15.5727 8.6137 15.3257ZM13.1657 19.5647C12.9197 19.5647 12.7287 19.4547 12.4007 19.1407L10.5687 17.3637C10.3637 17.1717 10.3227 16.9117 10.4587 16.7207C11.0747 15.8867 12.1137 15.3667 13.1657 15.3667C14.1917 15.3667 15.2167 15.8597 15.8317 16.6387C15.9957 16.8577 15.9827 17.1577 15.7777 17.3637L13.9457 19.1407C13.6037 19.4687 13.3987 19.5647 13.1657 19.5647Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM5.8247 12.5785L4.7847 11.5115C4.5797 11.2925 4.5527 10.9645 4.7437 10.7325C6.6307 8.3945 10.0487 6.8635 13.4527 6.8635C16.8577 6.8635 20.2757 8.3945 22.1617 10.7325C22.3537 10.9645 22.3397 11.2925 22.1207 11.5115L21.0817 12.5785C20.8087 12.8245 20.4527 12.8245 20.1937 12.5785C18.4297 10.6915 16.0917 9.6935 13.4527 9.6935C10.8417 9.6935 8.5317 10.6775 6.7407 12.5645C6.4667 12.8515 6.0707 12.8515 5.8247 12.5785ZM8.9417 15.5725L7.7657 14.4515C7.5197 14.2465 7.5057 13.9315 7.6977 13.6995C8.9687 12.2225 11.1837 11.2795 13.4527 11.2795C15.7367 11.2795 17.9517 12.2225 19.2087 13.6995C19.4007 13.9175 19.3867 14.2465 19.1547 14.4515L17.9787 15.5725C17.7187 15.8185 17.3497 15.8325 17.1037 15.5445C16.1597 14.5745 14.7797 13.9865 13.4527 13.9865C12.1267 13.9865 10.7597 14.5745 9.8437 15.5445C9.5837 15.8185 9.2147 15.8185 8.9417 15.5725ZM13.4527 19.7965C13.2067 19.7965 13.0017 19.6735 12.6737 19.3595L10.8417 17.6095C10.6227 17.4045 10.5817 17.1035 10.7187 16.8985C11.3477 16.0505 12.4137 15.5315 13.4527 15.5315C14.4927 15.5315 15.5037 16.0095 16.1467 16.8165C16.3377 17.0355 16.3107 17.3765 16.0917 17.6095L14.2737 19.3595C13.9317 19.6875 13.6997 19.7965 13.4527 19.7965Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM4.4567 11.3065L3.4457 10.2675C3.2947 10.1175 3.2677 9.9125 3.4047 9.7345C5.3047 7.3965 8.8727 5.8105 12.3867 5.8105C15.9007 5.8105 19.4547 7.3965 21.3687 9.7345C21.5057 9.9125 21.4927 10.1175 21.3277 10.2675L20.3167 11.3065C20.1387 11.4845 19.8927 11.4845 19.7147 11.3065C17.8417 9.2695 15.2577 8.2035 12.3867 8.2035C9.5157 8.2035 6.9587 9.2835 5.0727 11.2925C4.8807 11.4985 4.6077 11.4985 4.4567 11.3065ZM7.7387 14.6015L6.5897 13.4395C6.4397 13.2895 6.4117 13.0845 6.5487 12.9335C7.7927 11.4165 10.0627 10.4045 12.3867 10.4045C14.7107 10.4045 16.9667 11.4025 18.2247 12.9335C18.3617 13.0845 18.3477 13.2895 18.1977 13.4395L17.0347 14.6015C16.8437 14.7925 16.6247 14.7925 16.4197 14.5875C15.4357 13.4945 13.8767 12.7965 12.3867 12.8105C10.8827 12.7965 9.3377 13.4945 8.3677 14.5745C8.1617 14.7925 7.9297 14.7925 7.7387 14.6015ZM12.3867 18.9355C12.1957 18.9355 12.0587 18.8535 11.7577 18.5525L9.8577 16.7205C9.7207 16.5975 9.6937 16.4335 9.8027 16.2835C10.3357 15.5445 11.3617 15.0115 12.3867 15.0115C13.4117 15.0115 14.4377 15.5315 14.9567 16.2285C15.0797 16.3925 15.0527 16.5975 14.9157 16.7205L13.0297 18.5525C12.7147 18.8675 12.5777 18.9355 12.3867 18.9355Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM5.0317 11.8673L3.9787 10.7873C3.8007 10.5953 3.7737 10.3493 3.9377 10.1313C5.8377 7.7933 9.3377 6.2343 12.7967 6.2343C16.2697 6.2343 19.7697 7.7933 21.6697 10.1313C21.8337 10.3493 21.8067 10.5953 21.6287 10.7873L20.5767 11.8533C20.3577 12.0723 20.0567 12.0863 19.8377 11.8673C18.0197 9.8983 15.5587 8.8593 12.7967 8.8593C10.0487 8.8593 7.6157 9.9123 5.7967 11.8533C5.5647 12.0993 5.2227 12.0993 5.0317 11.8673ZM8.2167 15.0393L7.0407 13.8633C6.8497 13.6723 6.8227 13.4253 6.9867 13.2203C8.2717 11.6893 10.5137 10.7053 12.7967 10.7053C15.0937 10.7053 17.3357 11.6893 18.6207 13.2203C18.7847 13.4123 18.7717 13.6723 18.5797 13.8633L17.3907 15.0393C17.1587 15.2583 16.8707 15.2713 16.6387 15.0253C15.6817 13.9723 14.2047 13.3163 12.7967 13.3303C11.3887 13.3163 9.9257 13.9723 8.9957 15.0113C8.7497 15.2713 8.4497 15.2583 8.2167 15.0393ZM12.7967 19.2773C12.5777 19.2773 12.4007 19.1953 12.0857 18.8673L10.2127 17.0623C10.0487 16.8983 10.0077 16.6793 10.1307 16.5023C10.7187 15.6813 11.7577 15.1623 12.7967 15.1623C13.8357 15.1623 14.8747 15.6683 15.4497 16.4333C15.5997 16.6253 15.5727 16.8983 15.4087 17.0623L13.5347 18.8673C13.2067 19.1953 13.0297 19.2773 12.7967 19.2773Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM4.7847 11.6485L3.7327 10.5685C3.5547 10.3905 3.5277 10.1585 3.6777 9.9535C5.5917 7.6015 9.1187 6.0425 12.6057 6.0425C16.0777 6.0425 19.6057 7.6015 21.5197 9.9535C21.6837 10.1585 21.6567 10.3905 21.4787 10.5685L20.4257 11.6345C20.2207 11.8395 19.9337 11.8535 19.7287 11.6485C17.8967 9.6525 15.3947 8.6135 12.6057 8.6135C9.8167 8.6135 7.3417 9.6655 5.4957 11.6345C5.2777 11.8675 4.9627 11.8675 4.7847 11.6485ZM7.9977 14.8745L6.8087 13.6715C6.6447 13.4945 6.6177 13.2615 6.7677 13.0835C8.0527 11.5255 10.2947 10.5275 12.6057 10.5275C14.9027 10.5275 17.1587 11.5255 18.4297 13.0835C18.5937 13.2475 18.5797 13.5075 18.4027 13.6715L17.2127 14.8745C16.9937 15.0935 16.7207 15.0935 16.5017 14.8615C15.5317 13.7815 14.0277 13.0975 12.6057 13.1245C11.1567 13.0975 9.6797 13.7815 8.7227 14.8475C8.4907 15.1075 8.2167 15.0935 7.9977 14.8745ZM12.6057 19.1265C12.3867 19.1265 12.2227 19.0445 11.9087 18.7165L10.0217 16.8985C9.8707 16.7475 9.8297 16.5425 9.9397 16.3785C10.5277 15.5725 11.5667 15.0395 12.6057 15.0395C13.6307 15.0395 14.6697 15.5585 15.2307 16.3105C15.3807 16.4885 15.3537 16.7475 15.1897 16.8985L13.3167 18.7165C12.9747 19.0585 12.8247 19.1265 12.6057 19.1265Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM5.2087 12.045L4.1697 10.965C3.9787 10.76 3.9517 10.5 4.1287 10.281C6.0297 7.93 9.5157 6.385 12.9607 6.385C16.4067 6.385 19.8787 7.93 21.7927 10.281C21.9567 10.5 21.9437 10.76 21.7387 10.965L20.6997 12.031C20.4667 12.25 20.1527 12.264 19.9197 12.031C18.1157 10.09 15.6817 9.064 12.9607 9.064C10.2407 9.064 7.8337 10.09 6.0157 12.018C5.7697 12.277 5.4277 12.277 5.2087 12.045ZM8.3807 15.162L7.2047 14C7.0137 13.809 6.9867 13.549 7.1507 13.344C8.4357 11.812 10.6637 10.842 12.9607 10.842C15.2437 10.842 17.4867 11.812 18.7577 13.344C18.9357 13.535 18.9087 13.809 18.7167 14L17.5277 15.162C17.2947 15.395 16.9807 15.408 16.7477 15.148C15.7907 14.123 14.3417 13.467 12.9607 13.48C11.5667 13.467 10.1307 14.123 9.1877 15.135C8.9417 15.408 8.6267 15.395 8.3807 15.162ZM12.9607 19.4C12.7287 19.4 12.5507 19.305 12.2227 18.99L10.3637 17.199C10.1857 17.021 10.1447 16.775 10.2677 16.598C10.8687 15.777 11.9217 15.244 12.9607 15.244C13.9867 15.244 15.0257 15.75 15.6137 16.529C15.7777 16.721 15.7497 17.008 15.5727 17.199L13.7127 18.99C13.3707 19.318 13.1937 19.4 12.9607 19.4Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM4.0197 10.8414L3.0487 9.8574C2.9397 9.7204 2.9117 9.5704 3.0347 9.4204C4.9217 7.0954 8.5447 5.5094 12.0997 5.5094C15.6547 5.5094 19.2637 7.1094 21.1637 9.4204C21.2867 9.5704 21.2867 9.7204 21.1507 9.8574L20.1797 10.8414C20.0427 10.9924 19.8377 10.9784 19.7017 10.8284C17.7867 8.7364 15.0797 7.6424 12.0997 7.6424C9.1187 7.6424 6.4667 8.7774 4.4977 10.8284C4.3617 10.9924 4.1567 11.0054 4.0197 10.8414ZM7.3967 14.2324L6.2757 13.1114C6.1657 13.0024 6.1527 12.8384 6.2617 12.7144C7.4647 11.2384 9.7617 10.2264 12.0997 10.2264C14.4517 10.2264 16.7347 11.2244 17.9377 12.7144C18.0607 12.8384 18.0467 13.0024 17.9237 13.1114L16.8027 14.2324C16.6657 14.3824 16.4887 14.3694 16.3247 14.2054C15.3127 13.0974 13.6717 12.3594 12.0997 12.3864C10.5277 12.3594 8.9007 13.0974 7.8887 14.2054C7.7247 14.3694 7.5467 14.3824 7.3967 14.2324ZM12.0997 18.6754C11.9627 18.6754 11.8397 18.5934 11.5527 18.3204L9.6387 16.4884C9.5297 16.3794 9.5157 16.2694 9.6117 16.1194C10.0767 15.4904 11.0877 14.9574 12.0997 14.9574C13.1117 14.9574 14.1227 15.4764 14.5877 16.1054C14.6837 16.2554 14.6567 16.3794 14.5607 16.4884L12.6467 18.3204C12.3597 18.6074 12.2497 18.6754 12.0997 18.6754Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM3.8007 10.609L2.8577 9.652C2.7617 9.529 2.7347 9.393 2.8437 9.27C4.7307 6.945 8.3807 5.346 11.9497 5.346C15.5317 5.346 19.1677 6.959 21.0687 9.27C21.1777 9.393 21.1777 9.529 21.0547 9.652L20.1117 10.609C19.9887 10.746 19.8247 10.719 19.7017 10.582C17.7597 8.449 14.9977 7.355 11.9497 7.355C8.9137 7.355 6.2067 8.504 4.2107 10.582C4.0877 10.719 3.9237 10.746 3.8007 10.609ZM7.2187 14.041L6.1247 12.947C6.0157 12.852 6.0297 12.701 6.1117 12.605C7.2867 11.143 9.5977 10.131 11.9497 10.131C14.3147 10.131 16.6117 11.115 17.8007 12.605C17.9097 12.701 17.8827 12.838 17.7867 12.947L16.6797 14.041C16.5707 14.164 16.4067 14.15 16.2697 14.014C15.2437 12.893 13.5627 12.141 11.9497 12.154C10.3497 12.141 8.6677 12.893 7.6427 14.014C7.4927 14.15 7.3417 14.164 7.2187 14.041ZM11.9497 18.539C11.8397 18.539 11.7307 18.471 11.4567 18.211L9.5297 16.352C9.4337 16.27 9.4337 16.188 9.5157 16.051C9.9527 15.449 10.9377 14.93 11.9497 14.93C12.9607 14.93 13.9587 15.449 14.3967 16.051C14.4787 16.188 14.4647 16.27 14.3827 16.352L12.4547 18.211C12.1817 18.471 12.0727 18.539 11.9497 18.539Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
