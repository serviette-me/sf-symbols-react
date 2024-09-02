import { IconProps } from "../../types"

export default function FigureStandIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15.09375 33.455078125"
          className={className}
        >
          <path
            d="              M7.5467 6.9041C9.4477 6.9041 11.0057 5.3591 11.0057 3.4591C11.0057 1.5581 9.4477 0.0001 7.5467 0.0001C5.6467 0.0001 4.0877 1.5581 4.0877 3.4591C4.0877 5.3591 5.6467 6.9041 7.5467 6.9041ZM-0.0003 20.2211C-0.0003 21.0821 0.6837 21.7791 1.5447 21.7791C2.4067 21.7791 3.1037 21.0821 3.1037 20.2211V14.6011C3.1037 14.4101 3.2677 14.2461 3.4587 14.2461C3.6637 14.2461 3.8277 14.4101 3.8277 14.6011V31.7731C3.8277 32.7171 4.5667 33.4551 5.5097 33.4551C6.4257 33.4551 7.1917 32.7031 7.1917 31.7731V21.2601C7.1917 21.0681 7.3557 20.9041 7.5467 20.9041C7.7517 20.9041 7.9027 21.0681 7.9027 21.2601V31.7731C7.9027 32.7031 8.6677 33.4551 9.5977 33.4551C10.5407 33.4551 11.2797 32.7171 11.2797 31.7731V14.6011C11.2797 14.4101 11.4297 14.2461 11.6347 14.2461C11.8267 14.2461 11.9907 14.4101 11.9907 14.6011V20.2211C11.9907 21.0821 12.6877 21.7791 13.5487 21.7791C14.4097 21.7791 15.0937 21.0821 15.0937 20.2211V13.9451C15.0937 10.5681 12.4277 8.3261 8.7367 8.3261H6.3577C2.6657 8.3261 -0.0003 10.5681 -0.0003 13.9451Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 13.986328125 31.951171875"
          className={className}
        >
          <path
            d="              M6.9997 6.4399C8.7637 6.4399 10.2127 4.9899 10.2127 3.2129C10.2127 1.4359 8.7637 -0.0001 6.9997 -0.0001C5.2227 -0.0001 3.7737 1.4359 3.7737 3.2129C3.7737 4.9899 5.2227 6.4399 6.9997 6.4399ZM-0.0003 19.3319C-0.0003 20.0979 0.6157 20.7129 1.3807 20.7129C2.1467 20.7129 2.7617 20.0979 2.7617 19.3319V13.8909C2.7617 13.6719 2.9397 13.4809 3.1717 13.4809C3.3907 13.4809 3.5687 13.6719 3.5687 13.8909V30.4469C3.5687 31.2809 4.2387 31.9509 5.0727 31.9509C5.9067 31.9509 6.5897 31.2809 6.5897 30.4469V20.3439C6.5897 20.1109 6.7677 19.9339 6.9997 19.9339C7.2187 19.9339 7.4097 20.1109 7.4097 20.3439V30.4469C7.4097 31.2809 8.0797 31.9509 8.9137 31.9509C9.7477 31.9509 10.4177 31.2809 10.4177 30.4469V13.8909C10.4177 13.6719 10.5957 13.4809 10.8147 13.4809C11.0467 13.4809 11.2247 13.6719 11.2247 13.8909V19.3319C11.2247 20.0979 11.8397 20.7129 12.6057 20.7129C13.3707 20.7129 13.9867 20.0979 13.9867 19.3319V13.2479C13.9867 10.0489 11.5527 7.9299 8.0797 7.9299H5.9067C2.4337 7.9299 -0.0003 10.0489 -0.0003 13.2479Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14.57421875 32.744140625"
          className={className}
        >
          <path
            d="              M7.2867 6.686C9.1327 6.686 10.6227 5.182 10.6227 3.35C10.6227 1.504 9.1327 0 7.2867 0C5.4417 0 3.9517 1.504 3.9517 3.35C3.9517 5.182 5.4417 6.686 7.2867 6.686ZM-0.0003 19.797C-0.0003 20.617 0.6567 21.287 1.4627 21.287C2.2837 21.287 2.9397 20.617 2.9397 19.797V14.273C2.9397 14.055 3.1177 13.891 3.3227 13.891C3.5277 13.891 3.7047 14.055 3.7047 14.273V31.145C3.7047 32.047 4.4027 32.744 5.3047 32.744C6.1797 32.744 6.9047 32.033 6.9047 31.145V20.822C6.9047 20.617 7.0817 20.439 7.2867 20.439C7.4927 20.439 7.6697 20.617 7.6697 20.822V31.145C7.6697 32.033 8.3807 32.744 9.2697 32.744C10.1717 32.744 10.8687 32.047 10.8687 31.145V14.273C10.8687 14.055 11.0337 13.891 11.2517 13.891C11.4567 13.891 11.6347 14.055 11.6347 14.273V19.797C11.6347 20.617 12.2907 21.287 13.1117 21.287C13.9177 21.287 14.5747 20.617 14.5747 19.797V13.617C14.5747 10.322 12.0177 8.135 8.4357 8.135H6.1387C2.5567 8.135 -0.0003 10.322 -0.0003 13.617Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12.236328125 29.6953125"
          className={className}
        >
          <path
            d="              M6.1247 5.7695C7.7247 5.7695 9.0097 4.4845 9.0097 2.8845C9.0097 1.2855 7.7247 0.0005 6.1247 0.0005C4.5257 0.0005 3.2407 1.2855 3.2407 2.8845C3.2407 4.4845 4.5257 5.7695 6.1247 5.7695ZM-0.0003 17.9515C-0.0003 18.6075 0.5197 19.1135 1.1617 19.1135C1.8047 19.1135 2.3247 18.6075 2.3247 17.9515V12.8105C2.3247 12.5915 2.5017 12.4005 2.7347 12.4005C2.9527 12.4005 3.1447 12.5915 3.1447 12.8105V28.4235C3.1447 29.1345 3.7187 29.6955 4.4157 29.6955C5.1267 29.6955 5.7017 29.1345 5.7017 28.4235V18.9085C5.7017 18.6755 5.8927 18.4845 6.1247 18.4845C6.3437 18.4845 6.5347 18.6755 6.5347 18.9085V28.4235C6.5347 29.1345 7.1097 29.6955 7.8207 29.6955C8.5317 29.6955 9.0917 29.1345 9.0917 28.4235V12.8105C9.0917 12.5915 9.2837 12.4005 9.5017 12.4005C9.7347 12.4005 9.9257 12.5915 9.9257 12.8105V17.9515C9.9257 18.6075 10.4317 19.1135 11.0877 19.1135C11.7167 19.1135 12.2367 18.6075 12.2367 17.9515V12.2225C12.2367 9.2835 10.1037 7.3415 7.0407 7.3415H5.1957C2.1467 7.3415 -0.0003 9.2835 -0.0003 12.2225Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 13.275390625 30.98046875"
          className={className}
        >
          <path
            d="              M6.6447 6.1247C8.3397 6.1247 9.7067 4.7577 9.7067 3.0627C9.7067 1.3667 8.3397 -0.0003 6.6447 -0.0003C4.9497 -0.0003 3.5817 1.3667 3.5817 3.0627C3.5817 4.7577 4.9497 6.1247 6.6447 6.1247ZM-0.0003 18.7577C-0.0003 19.4547 0.5607 20.0297 1.2717 20.0297C1.9827 20.0297 2.5427 19.4547 2.5427 18.7577V13.4257C2.5427 13.1797 2.7347 12.9887 2.9807 12.9887C3.2127 12.9887 3.4047 13.1797 3.4047 13.4257V29.5857C3.4047 30.3657 4.0197 30.9807 4.7987 30.9807C5.5777 30.9807 6.1937 30.3517 6.1937 29.5857V19.7417C6.1937 19.4957 6.3987 19.3047 6.6447 19.3047C6.8767 19.3047 7.0817 19.4957 7.0817 19.7417V29.5857C7.0817 30.3517 7.6977 30.9807 8.4767 30.9807C9.2557 30.9807 9.8707 30.3657 9.8707 29.5857V13.4257C9.8707 13.1797 10.0627 12.9887 10.2947 12.9887C10.5407 12.9887 10.7327 13.1797 10.7327 13.4257V18.7577C10.7327 19.4547 11.2927 20.0297 12.0037 20.0297C12.7147 20.0297 13.2757 19.4547 13.2757 18.7577V12.7967C13.2757 9.7067 10.9787 7.6697 7.6697 7.6697H5.6187C2.2967 7.6697 -0.0003 9.7067 -0.0003 12.7967Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12.87890625 30.43359375"
          className={className}
        >
          <path
            d="              M6.4397 5.9606C8.0937 5.9606 9.4197 4.6346 9.4197 2.9806C9.4197 1.3266 8.0937 -0.0004 6.4397 -0.0004C4.7847 -0.0004 3.4587 1.3266 3.4587 2.9806C3.4587 4.6346 4.7847 5.9606 6.4397 5.9606ZM-0.0003 18.4296C-0.0003 19.1136 0.5337 19.6466 1.2167 19.6466C1.8867 19.6466 2.4197 19.1136 2.4197 18.4296V13.1656C2.4197 12.9196 2.6247 12.7286 2.8707 12.7286C3.1177 12.7286 3.3087 12.9196 3.3087 13.1656V29.1076C3.3087 29.8456 3.9097 30.4336 4.6487 30.4336C5.3867 30.4336 5.9887 29.8456 5.9887 29.1076V19.4136C5.9887 19.1676 6.1937 18.9496 6.4397 18.9496C6.6857 18.9496 6.9047 19.1676 6.9047 19.4136V29.1076C6.9047 29.8456 7.4927 30.4336 8.2307 30.4336C8.9687 30.4336 9.5707 29.8456 9.5707 29.1076V13.1656C9.5707 12.9196 9.7617 12.7286 10.0077 12.7286C10.2537 12.7286 10.4587 12.9196 10.4587 13.1656V18.4296C10.4587 19.1136 10.9927 19.6466 11.6617 19.6466C12.3457 19.6466 12.8787 19.1136 12.8787 18.4296V12.5506C12.8787 9.5296 10.6637 7.5336 7.4237 7.5336H5.4547C2.2147 7.5336 -0.0003 9.5296 -0.0003 12.5506Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 13.58984375 31.390625"
          className={className}
        >
          <path
            d="              M6.7947 6.2481C8.5177 6.2481 9.9257 4.8531 9.9257 3.1311C9.9257 1.3941 8.5177 0.0001 6.7947 0.0001C5.0587 0.0001 3.6637 1.3941 3.6637 3.1311C3.6637 4.8531 5.0587 6.2481 6.7947 6.2481ZM-0.0003 19.0041C-0.0003 19.7281 0.5877 20.3161 1.3127 20.3161C2.0507 20.3161 2.6387 19.7281 2.6387 19.0041V13.6171C2.6387 13.3851 2.8297 13.2071 3.0627 13.2071C3.2947 13.2071 3.4727 13.3851 3.4727 13.6171V29.9551C3.4727 30.7621 4.1157 31.3911 4.9217 31.3911C5.7147 31.3911 6.3707 30.7481 6.3707 29.9551V20.0021C6.3707 19.7691 6.5627 19.5641 6.7947 19.5641C7.0277 19.5641 7.2187 19.7691 7.2187 20.0021V29.9551C7.2187 30.7481 7.8617 31.3911 8.6677 31.3911C9.4747 31.3911 10.1037 30.7621 10.1037 29.9551V13.6171C10.1037 13.3851 10.2947 13.2071 10.5277 13.2071C10.7597 13.2071 10.9377 13.3851 10.9377 13.6171V19.0041C10.9377 19.7281 11.5387 20.3161 12.2637 20.3161C13.0017 20.3161 13.5897 19.7281 13.5897 19.0041V12.9881C13.5897 9.8441 11.2247 7.7791 7.8477 7.7791H5.7427C2.3517 7.7791 -0.0003 9.8441 -0.0003 12.9881Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 11.388671875 28.7109375"
          className={className}
        >
          <path
            d="              M5.7017 5.5236C7.2327 5.5236 8.4627 4.2926 8.4627 2.7616C8.4627 1.2306 7.2327 -0.0004 5.7017 -0.0004C4.1697 -0.0004 2.9397 1.2306 2.9397 2.7616C2.9397 4.2926 4.1697 5.5236 5.7017 5.5236ZM-0.0003 17.3226C-0.0003 17.9236 0.4927 18.4156 1.0797 18.4156C1.6957 18.4156 2.1737 17.9236 2.1737 17.3226V12.3456C2.1737 12.1406 2.3377 11.9766 2.5427 11.9766C2.7477 11.9766 2.9117 12.1406 2.9117 12.3456V27.5076C2.9117 28.1776 3.4587 28.7106 4.1157 28.7106C4.7847 28.7106 5.3187 28.1776 5.3187 27.5076V18.2386C5.3187 18.0336 5.4957 17.8696 5.7017 17.8696C5.9067 17.8696 6.0707 18.0336 6.0707 18.2386V27.5076C6.0707 28.1776 6.6037 28.7106 7.2737 28.7106C7.9437 28.7106 8.4767 28.1776 8.4767 27.5076V12.3456C8.4767 12.1406 8.6407 11.9766 8.8457 11.9766C9.0507 11.9766 9.2147 12.1406 9.2147 12.3456V17.3226C9.2147 17.9236 9.6937 18.4156 10.3087 18.4156C10.9097 18.4156 11.3887 17.9236 11.3887 17.3226V11.7856C11.3887 8.9686 9.3377 7.0956 6.5217 7.0956H4.8677C2.0507 7.0956 -0.0003 8.9686 -0.0003 11.7856Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10.96484375 28.205078125"
          className={className}
        >
          <path
            d="              M5.4827 5.4005C6.9727 5.4005 8.1757 4.1975 8.1757 2.6935C8.1757 1.2035 6.9727 0.0005 5.4827 0.0005C3.9787 0.0005 2.7757 1.2035 2.7757 2.6935C2.7757 4.1975 3.9787 5.4005 5.4827 5.4005ZM-0.0003 16.9805C-0.0003 17.5685 0.4647 18.0465 1.0387 18.0465C1.6407 18.0465 2.1057 17.5685 2.1057 16.9805V12.0995C2.1057 11.9085 2.2557 11.7575 2.4477 11.7575C2.6387 11.7575 2.8027 11.9085 2.8027 12.0995V27.0435C2.8027 27.6855 3.3227 28.2055 3.9647 28.2055C4.6077 28.2055 5.1267 27.6855 5.1267 27.0435V17.8825C5.1267 17.7055 5.2907 17.5415 5.4827 17.5415C5.6737 17.5415 5.8247 17.7055 5.8247 17.8825V27.0435C5.8247 27.6855 6.3437 28.2055 6.9867 28.2055C7.6427 28.2055 8.1617 27.6855 8.1617 27.0435V12.0995C8.1617 11.9085 8.3127 11.7575 8.5037 11.7575C8.6957 11.7575 8.8597 11.9085 8.8597 12.0995V16.9805C8.8597 17.5685 9.3247 18.0465 9.9117 18.0465C10.4867 18.0465 10.9647 17.5685 10.9647 16.9805V11.5525C10.9647 8.7915 8.9547 6.9595 6.2617 6.9595H4.7027C2.0097 6.9595 -0.0003 8.7915 -0.0003 11.5525Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}