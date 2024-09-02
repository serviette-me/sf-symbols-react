import { IconProps } from "../../types"

export default function EyeglassesIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 51.76171875 20.412109375"
          className={className}
        >
          <path
            d="              M13.6167 20.4123C18.8537 20.4123 23.1737 16.4743 23.7477 11.3753C24.4587 11.1293 25.2387 11.0333 25.8807 11.0333C26.5237 11.0333 27.3027 11.1293 28.0137 11.3753C28.6017 16.4743 32.9077 20.4123 38.1447 20.4123C43.0937 20.4123 47.2087 16.9253 48.1657 12.2773H50.5317C51.3107 12.2773 51.7617 11.8263 51.7617 10.9923V8.4493C51.7617 7.6293 51.3517 7.2183 50.5317 7.2183H47.9337C46.6487 3.0353 42.7657 0.0003 38.1447 0.0003C33.5917 0.0003 29.7367 2.9803 28.4237 7.0953C27.6037 6.7813 26.6597 6.6443 25.8807 6.6443C25.1017 6.6443 24.1577 6.7813 23.3377 7.0953C22.0387 2.9803 18.1837 0.0003 13.6167 0.0003C8.9957 0.0003 5.1137 3.0353 3.8417 7.2183H1.2307C0.4097 7.2183 -0.0003 7.6293 -0.0003 8.4493V10.9923C-0.0003 11.8263 0.4507 12.2773 1.2307 12.2773H3.5957C4.5527 16.9253 8.6677 20.4123 13.6167 20.4123ZM13.6167 15.3943C10.7327 15.3943 8.4217 13.0703 8.4217 10.1993C8.4217 7.3413 10.7327 5.0173 13.6167 5.0173C16.4747 5.0173 18.7987 7.3413 18.7987 10.1993C18.7987 13.0703 16.4747 15.3943 13.6167 15.3943ZM38.1447 15.3943C35.2867 15.3943 32.9767 13.0703 32.9767 10.1993C32.9767 7.3413 35.2867 5.0173 38.1447 5.0173C41.0297 5.0173 43.3397 7.3413 43.3397 10.1993C43.3397 13.0703 41.0297 15.3943 38.1447 15.3943Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 47.455078125 18.744140625"
          className={className}
        >
          <path
            d="              M12.3867 18.7443C17.3357 18.7443 21.3827 14.9163 21.7247 10.0353C22.3667 9.8023 23.0917 9.7073 23.7207 9.7073C24.3637 9.7073 25.0737 9.8023 25.7167 10.0353C26.0587 14.9163 30.1187 18.7443 35.0687 18.7443C39.7307 18.7443 43.5997 15.3403 44.3237 10.8693H46.3207C47.0587 10.8693 47.4547 10.4723 47.4547 9.7203V8.1623C47.4547 7.4103 47.0727 7.0273 46.3207 7.0273H44.1467C43.1077 2.9803 39.4437 0.0003 35.0687 0.0003C30.8027 0.0003 27.2067 2.8433 26.0727 6.7403C25.3067 6.4663 24.4317 6.3433 23.7207 6.3433C23.0097 6.3433 22.1347 6.4663 21.3827 6.7403C20.2477 2.8433 16.6527 0.0003 12.3867 0.0003C8.0117 0.0003 4.3337 2.9803 3.3087 7.0273H1.1207C0.3827 7.0273 -0.0003 7.4103 -0.0003 8.1623V9.7203C-0.0003 10.4723 0.3967 10.8693 1.1207 10.8693H3.1307C3.8557 15.3403 7.7107 18.7443 12.3867 18.7443ZM12.3867 15.0803C9.2287 15.0803 6.6717 12.5233 6.6717 9.3653C6.6717 6.2203 9.2287 3.6643 12.3867 3.6643C15.5317 3.6643 18.0877 6.2203 18.0877 9.3653C18.0877 12.5233 15.5317 15.0803 12.3867 15.0803ZM35.0687 15.0803C31.9237 15.0803 29.3667 12.5233 29.3667 9.3653C29.3667 6.2203 31.9237 3.6643 35.0687 3.6643C38.2267 3.6643 40.7697 6.2203 40.7697 9.3653C40.7697 12.5233 38.2267 15.0803 35.0687 15.0803Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 49.724609375 19.6328125"
          className={className}
        >
          <path
            d="              M13.0427 19.6325C18.1427 19.6325 22.3257 15.7495 22.8047 10.7595C23.4747 10.5135 24.2267 10.4175 24.8687 10.4175C25.5117 10.4175 26.2497 10.5135 26.9337 10.7595C27.3987 15.7495 31.5817 19.6325 36.6957 19.6325C41.5077 19.6325 45.4997 16.1875 46.3477 11.6215H48.5487C49.3007 11.6215 49.7247 11.1975 49.7247 10.4045V8.3265C49.7247 7.5335 49.3277 7.1365 48.5487 7.1365H46.1427C44.9807 3.0215 41.1937 -0.0005 36.6957 -0.0005C32.2657 -0.0005 28.5327 2.9255 27.3167 6.9455C26.5237 6.6445 25.6077 6.5075 24.8687 6.5075C24.1167 6.5075 23.2007 6.6445 22.4217 6.9455C21.1917 2.9255 17.4587 -0.0005 13.0427 -0.0005C8.5317 -0.0005 4.7437 3.0215 3.5817 7.1365H1.1757C0.3967 7.1365 -0.0003 7.5335 -0.0003 8.3265V10.4045C-0.0003 11.1975 0.4237 11.6215 1.1757 11.6215H3.3767C4.2247 16.1875 8.2167 19.6325 13.0427 19.6325ZM13.0427 15.2575C10.0217 15.2575 7.6017 12.8245 7.6017 9.8165C7.6017 6.8225 10.0217 4.3885 13.0427 4.3885C16.0237 4.3885 18.4567 6.8225 18.4567 9.8165C18.4567 12.8245 16.0237 15.2575 13.0427 15.2575ZM36.6957 15.2575C33.7007 15.2575 31.2677 12.8245 31.2677 9.8165C31.2677 6.8225 33.7007 4.3885 36.6957 4.3885C39.7027 4.3885 42.1367 6.8225 42.1367 9.8165C42.1367 12.8245 39.7027 15.2575 36.6957 15.2575Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 42.7109375 16.775390625"
          className={className}
        >
          <path
            d="              M10.9097 16.775C15.5317 16.775 19.2907 13.016 19.2907 8.381V8.34C19.9337 8.066 20.6717 7.93 21.3557 7.93C22.0387 7.93 22.7777 8.066 23.4197 8.34V8.381C23.4197 13.016 27.1797 16.775 31.8147 16.775C36.1897 16.775 39.7987 13.412 40.1817 9.133H41.8087C42.4097 9.133 42.7107 8.832 42.7107 8.244V7.793C42.7107 7.205 42.4097 6.904 41.8087 6.904H40.0727C39.3747 2.981 35.9437 0 31.8147 0C27.8637 0 24.5547 2.721 23.6527 6.385C22.9277 6.098 22.0527 5.988 21.3557 5.988C20.6577 5.988 19.7827 6.098 19.0587 6.385C18.1567 2.721 14.8477 0 10.9097 0C6.7677 0 3.3357 2.981 2.6387 6.904H0.9027C0.3147 6.904 -0.0003 7.205 -0.0003 7.793V8.244C-0.0003 8.832 0.3147 9.133 0.9027 9.133H2.5427C2.9117 13.412 6.5217 16.775 10.9097 16.775ZM10.9097 15.012C7.2327 15.012 4.2657 12.045 4.2657 8.381C4.2657 4.717 7.2327 1.75 10.9097 1.75C14.5607 1.75 17.5277 4.731 17.5277 8.381C17.5277 12.031 14.5607 15.012 10.9097 15.012ZM31.8147 15.012C28.1507 15.012 25.1837 12.031 25.1837 8.381C25.1837 4.731 28.1507 1.75 31.8147 1.75C35.4787 1.75 38.4457 4.717 38.4457 8.381C38.4457 12.045 35.4787 15.012 31.8147 15.012Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 44.693359375 17.677734375"
          className={className}
        >
          <path
            d="              M11.6077 17.6781C16.3657 17.6781 20.2477 13.9041 20.4257 9.1741C21.0277 8.9551 21.7107 8.8591 22.3397 8.8591C22.9827 8.8591 23.6657 8.9551 24.2677 9.1741C24.4457 13.9041 28.3277 17.6781 33.0997 17.6781C37.5837 17.6781 41.2887 14.3281 41.8497 9.9801H43.6267C44.3237 9.9801 44.6937 9.6111 44.6937 8.9001V7.9711C44.6937 7.2731 44.3237 6.9181 43.6267 6.9181H41.7267C40.8377 2.9671 37.3107 0.0001 33.0997 0.0001C29.0117 0.0001 25.5797 2.7621 24.5687 6.5211C23.8437 6.2621 23.0097 6.1521 22.3397 6.1521C21.6837 6.1521 20.8497 6.2621 20.1247 6.5211C19.1137 2.7621 15.6817 0.0001 11.6077 0.0001C7.3827 0.0001 3.8557 2.9671 2.9667 6.9181H1.0527C0.3557 6.9181 -0.0003 7.2731 -0.0003 7.9711V8.9001C-0.0003 9.6111 0.3687 9.9801 1.0527 9.9801H2.8297C3.4047 14.3281 7.1097 17.6781 11.6077 17.6781ZM11.6077 14.8751C8.2577 14.8751 5.5647 12.1681 5.5647 8.8321C5.5647 5.4961 8.2577 2.8031 11.6077 2.8031C14.9297 2.8031 17.6367 5.5101 17.6367 8.8321C17.6367 12.1681 14.9297 14.8751 11.6077 14.8751ZM33.0997 14.8751C29.7637 14.8751 27.0567 12.1681 27.0567 8.8321C27.0567 5.5101 29.7637 2.8031 33.0997 2.8031C36.4217 2.8031 39.1287 5.4961 39.1287 8.8321C39.1287 12.1681 36.4217 14.8751 33.0997 14.8751Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 43.134765625 17.0625"
          className={className}
        >
          <path
            d="              M11.1697 17.0623C15.8187 17.0623 19.5917 13.3433 19.6877 8.6953C20.2617 8.4903 20.9317 8.3813 21.5737 8.3813C22.2027 8.3813 22.8727 8.4903 23.4477 8.6953C23.5427 13.3433 27.3297 17.0623 31.9917 17.0623C36.3667 17.0623 39.9907 13.7403 40.4687 9.4743H42.1227C42.7927 9.4743 43.1347 9.1193 43.1347 8.4353V7.8753C43.1347 7.1913 42.7927 6.8493 42.1227 6.8493H40.3457C39.5667 2.9533 36.1077 0.0003 31.9917 0.0003C28.0137 0.0003 24.6777 2.7203 23.7207 6.3843C23.0237 6.1383 22.2167 6.0433 21.5737 6.0433C20.9317 6.0433 20.1117 6.1383 19.4137 6.3843C18.4707 2.7203 15.1347 0.0003 11.1697 0.0003C7.0277 0.0003 3.5687 2.9533 2.7887 6.8493H1.0257C0.3557 6.8493 -0.0003 7.1913 -0.0003 7.8753V8.4353C-0.0003 9.1193 0.3557 9.4743 1.0257 9.4743H2.6797C3.1447 13.7403 6.7677 17.0623 11.1697 17.0623ZM11.1697 14.7523C7.7247 14.7523 4.9357 11.9763 4.9357 8.5313C4.9357 5.0993 7.7247 2.3103 11.1697 2.3103C14.5877 2.3103 17.3767 5.1133 17.3767 8.5313C17.3767 11.9633 14.5877 14.7523 11.1697 14.7523ZM31.9917 14.7523C28.5607 14.7523 25.7577 11.9633 25.7577 8.5313C25.7577 5.1133 28.5607 2.3103 31.9917 2.3103C35.4237 2.3103 38.1987 5.0993 38.1987 8.5313C38.1987 11.9763 35.4237 14.7523 31.9917 14.7523Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 45.8828125 18.142578125"
          className={className}
        >
          <path
            d="              M11.9487 18.1425C16.7887 18.1425 20.7407 14.3415 20.9867 9.5565C21.6017 9.3245 22.2987 9.2285 22.9417 9.2285C23.5837 9.2285 24.2817 9.3245 24.8967 9.5565C25.1427 14.3415 29.0937 18.1425 33.9477 18.1425C38.5137 18.1425 42.2867 14.7655 42.9157 10.3635H44.7887C45.4997 10.3635 45.8827 9.9805 45.8827 9.2555V8.0525C45.8827 7.3285 45.5137 6.9585 44.7887 6.9585H42.7657C41.8227 2.9805 38.2267 -0.0005 33.9477 -0.0005C29.7777 -0.0005 26.2777 2.8025 25.2107 6.6175C24.4727 6.3435 23.6247 6.2345 22.9417 6.2345C22.2577 6.2345 21.4097 6.3435 20.6717 6.6175C19.6057 2.8025 16.1057 -0.0005 11.9487 -0.0005C7.6567 -0.0005 4.0607 2.9805 3.1167 6.9585H1.0937C0.3687 6.9585 -0.0003 7.3285 -0.0003 8.0525V9.2555C-0.0003 9.9805 0.3827 10.3635 1.0937 10.3635H2.9667C3.5957 14.7655 7.3687 18.1425 11.9487 18.1425ZM11.9487 14.9565C8.6817 14.9565 6.0427 12.3315 6.0427 9.0645C6.0427 5.8105 8.6817 3.1715 11.9487 3.1715C15.1897 3.1715 17.8277 5.8245 17.8277 9.0645C17.8277 12.3185 15.1897 14.9565 11.9487 14.9565ZM33.9477 14.9565C30.6937 14.9565 28.0547 12.3185 28.0547 9.0645C28.0547 5.8245 30.6937 3.1715 33.9477 3.1715C37.2007 3.1715 39.8397 5.8105 39.8397 9.0645C39.8397 12.3315 37.2007 14.9565 33.9477 14.9565Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 42.150390625 16.40625"
          className={className}
        >
          <path
            d="              M10.5687 16.4062C15.0937 16.4062 18.7577 12.7282 18.7577 8.2032C18.7577 8.0942 18.7577 7.9982 18.7577 7.9022C19.4827 7.5332 20.3577 7.3692 21.0687 7.3692C21.7927 7.3692 22.6547 7.5332 23.3927 7.9022C23.3927 7.9982 23.3787 8.0942 23.3787 8.2032C23.3787 12.7282 27.0567 16.4062 31.5817 16.4062C35.9567 16.4062 39.5257 13.0022 39.7847 8.7092H41.3987C41.8907 8.7092 42.1507 8.4762 42.1507 7.9982V7.7242C42.1507 7.2322 41.8907 6.9862 41.3987 6.9862H39.7167C39.1287 3.0352 35.7107 0.0002 31.5817 0.0002C27.6577 0.0002 24.3907 2.7482 23.5707 6.4262C22.8047 6.0702 21.8337 5.9332 21.0687 5.9332C20.3167 5.9332 19.3457 6.0702 18.5667 6.4262C17.7597 2.7482 14.4787 0.0002 10.5687 0.0002C6.4397 0.0002 3.0217 3.0352 2.4337 6.9862H0.7517C0.2457 6.9862 -0.0003 7.2322 -0.0003 7.7242V7.9982C-0.0003 8.4762 0.2457 8.7092 0.7517 8.7092H2.3657C2.6247 13.0022 6.1937 16.4062 10.5687 16.4062ZM10.5687 15.3672C6.6037 15.3672 3.3767 12.1682 3.3767 8.2032C3.3767 4.2382 6.6037 1.0392 10.5687 1.0392C14.5197 1.0392 17.7187 4.2382 17.7187 8.2032C17.7187 12.1542 14.5197 15.3672 10.5687 15.3672ZM31.5817 15.3672C27.6307 15.3672 24.4177 12.1542 24.4177 8.2032C24.4177 4.2382 27.6307 1.0392 31.5817 1.0392C35.5467 1.0392 38.7597 4.2382 38.7597 8.2032C38.7597 12.1682 35.5467 15.3672 31.5817 15.3672Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.86328125 16.21484375"
          className={className}
        >
          <path
            d="              M10.3907 16.2145C14.8617 16.2145 18.4977 12.5915 18.4977 8.1075C18.4977 7.9575 18.4847 7.8205 18.4847 7.6835C19.2637 7.2465 20.1937 7.0825 20.9317 7.0825C21.6697 7.0825 22.5997 7.2465 23.3787 7.6835C23.3657 7.8205 23.3657 7.9575 23.3657 8.1075C23.3657 12.5915 26.9887 16.2145 31.4727 16.2145C35.8207 16.2145 39.3887 12.7835 39.5937 8.4765H41.1797C41.6307 8.4765 41.8637 8.2855 41.8637 7.8745V7.6695C41.8637 7.2465 41.6307 7.0405 41.1797 7.0405H39.5257C39.0057 3.0625 35.5877 -0.0005 31.4727 -0.0005C27.5217 -0.0005 24.2407 2.8165 23.5157 6.5625V6.4395C22.7227 6.0565 21.7107 5.8925 20.9317 5.8925C20.1387 5.8925 19.1267 6.0565 18.3477 6.4395V6.5625C17.6227 2.8165 14.3417 -0.0005 10.3907 -0.0005C6.2757 -0.0005 2.8577 3.0625 2.3377 7.0405H0.6697C0.2187 7.0405 -0.0003 7.2465 -0.0003 7.6695V7.8745C-0.0003 8.2855 0.2187 8.4765 0.6697 8.4765H2.2697C2.4607 12.7835 6.0297 16.2145 10.3907 16.2145ZM10.3907 15.5445C6.2757 15.5445 2.9257 12.2225 2.9257 8.1075C2.9257 3.9925 6.2757 0.6695 10.3907 0.6695C14.5057 0.6695 17.8277 3.9925 17.8277 8.1075C17.8277 12.2225 14.5057 15.5445 10.3907 15.5445ZM31.4727 15.5445C27.3577 15.5445 24.0347 12.2225 24.0347 8.1075C24.0347 3.9925 27.3577 0.6695 31.4727 0.6695C35.5877 0.6695 38.9237 3.9925 38.9237 8.1075C38.9237 12.2225 35.5877 15.5445 31.4727 15.5445Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}