import { IconProps } from "../../types"

export default function PuzzlepieceIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 42.21875 28.4375"
          className={className}
        >
          <path
            d="              M13.2757 28.4375H17.7327C19.3727 28.4375 20.5767 27.2895 20.5767 25.7715C20.5767 24.8415 20.2477 24.2535 19.9067 23.7345C19.5367 23.1875 19.1817 22.6955 19.1817 21.9575C19.1817 20.8355 19.9477 20.0565 21.1097 20.0565C22.2717 20.0565 23.0367 20.8355 23.0367 21.9575C23.0367 22.6955 22.6817 23.1875 22.3127 23.7345C21.9707 24.2535 21.6427 24.8415 21.6427 25.7715C21.6427 27.2895 22.8457 28.4375 24.4867 28.4375H28.9567C31.9647 28.4375 33.9337 26.4825 33.9337 23.5155V20.0705C33.9337 19.8375 34.0977 19.7555 34.3707 19.8925C34.9177 20.1245 35.6157 20.2485 36.4087 20.2485C39.3477 20.2485 42.2187 18.0335 42.2187 14.2185C42.2187 10.4045 39.3477 8.1755 36.4087 8.1755C35.6157 8.1755 34.9177 8.2985 34.3707 8.5445C34.0977 8.6675 33.9337 8.5995 33.9337 8.3535V4.9085C33.9337 1.9415 31.9647 -0.0005 28.9567 -0.0005H24.4867C22.8457 -0.0005 21.6427 1.1345 21.6427 2.6655C21.6427 3.5825 21.9707 4.1695 22.3127 4.6895C22.6817 5.2365 23.0367 5.7425 23.0367 6.4665C23.0367 7.5875 22.2717 8.3675 21.1097 8.3675C19.9477 8.3675 19.1817 7.5875 19.1817 6.4665C19.1817 5.7425 19.5367 5.2365 19.9067 4.6895C20.2477 4.1695 20.5767 3.5825 20.5767 2.6655C20.5767 1.1345 19.3727 -0.0005 17.7327 -0.0005H13.2757C10.2537 -0.0005 8.2847 1.9415 8.2847 4.9085V8.3535C8.2847 8.5995 8.1207 8.6675 7.8477 8.5445C7.3147 8.2985 6.6177 8.1755 5.8107 8.1755C2.8847 8.1755 -0.0003 10.4045 -0.0003 14.2185C-0.0003 18.0335 2.8847 20.2485 5.8107 20.2485C6.6177 20.2485 7.3147 20.1245 7.8477 19.8925C8.1207 19.7555 8.2847 19.8375 8.2847 20.0705V23.5155C8.2847 26.4825 10.2537 28.4375 13.2757 28.4375ZM13.3027 24.2125C12.8247 24.2125 12.5097 23.8845 12.5097 23.3785V17.5825C12.5097 15.9415 11.3617 14.7515 9.8437 14.7515C8.9137 14.7515 8.3267 15.0665 7.8067 15.4215C7.2597 15.7905 6.7677 16.1325 6.0297 16.1325C4.9087 16.1325 4.1287 15.3805 4.1287 14.2185C4.1287 13.0565 4.9087 12.2905 6.0297 12.2905C6.7677 12.2905 7.2597 12.6325 7.8067 13.0015C8.3267 13.3575 8.9137 13.6855 9.8437 13.6855C11.3617 13.6855 12.5097 12.4825 12.5097 10.8415V5.0445C12.5097 4.5395 12.8247 4.2105 13.3027 4.2105H15.1617C15.5447 4.2105 15.5037 4.3615 15.4087 4.6755C15.1897 5.3185 15.0667 6.0015 15.0667 6.6855C15.0667 9.6245 17.2947 12.4965 21.1097 12.4965C24.9237 12.4965 27.1527 9.6245 27.1527 6.6855C27.1527 6.0015 27.0297 5.3185 26.8107 4.6755C26.7287 4.3615 26.6737 4.2105 27.0567 4.2105H28.9157C29.4087 4.2105 29.7227 4.5395 29.7227 5.0445V10.8415C29.7227 12.4825 30.8577 13.6855 32.3887 13.6855C33.3187 13.6855 33.8927 13.3575 34.4257 13.0015C34.9727 12.6325 35.4647 12.2905 36.1897 12.2905C37.3107 12.2905 38.0897 13.0565 38.0897 14.2185C38.0897 15.3805 37.3107 16.1325 36.1897 16.1325C35.4647 16.1325 34.9727 15.7905 34.4257 15.4215C33.8927 15.0665 33.3187 14.7515 32.3887 14.7515C30.8577 14.7515 29.7227 15.9415 29.7227 17.5825V23.3785C29.7227 23.8845 29.4087 24.2125 28.9157 24.2125H27.0567C26.6737 24.2125 26.7287 24.0625 26.8107 23.7485C27.0297 23.1055 27.1527 22.4215 27.1527 21.7385C27.1527 18.8125 24.9237 15.9275 21.1097 15.9275C17.2947 15.9275 15.0667 18.8125 15.0667 21.7385C15.0667 22.4215 15.1897 23.1055 15.4087 23.7485C15.5037 24.0625 15.5447 24.2125 15.1617 24.2125Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.234375 27.439453125"
          className={className}
        >
          <path
            d="              M12.8787 27.4393H17.3767C18.7717 27.4393 19.7287 26.4963 19.7287 25.2523C19.7287 24.5413 19.4547 23.9803 19.0447 23.4473C18.5527 22.8453 18.1977 22.2163 18.1977 21.4513C18.1977 20.0973 19.1407 19.0583 20.6177 19.0583C22.0937 19.0583 23.0507 20.0973 23.0507 21.4513C23.0507 22.2163 22.6817 22.8453 22.1897 23.4473C21.7797 23.9803 21.5057 24.5413 21.5057 25.2523C21.5057 26.4963 22.4627 27.4393 23.8577 27.4393H28.3557C31.2407 27.4393 32.9357 25.7573 32.9357 22.9273V18.7853C32.9357 18.5523 33.0997 18.4703 33.3597 18.6213C34.0567 19.0453 34.9047 19.3323 35.8747 19.3323C38.6367 19.3323 41.2347 17.1723 41.2347 13.7543C41.2347 10.3223 38.6367 8.1623 35.8747 8.1623C34.9047 8.1623 34.0567 8.4493 33.3597 8.8733C33.0997 9.0233 32.9357 8.9413 32.9357 8.7093V4.5113C32.9357 1.6813 31.2407 0.0003 28.3557 0.0003H23.8577C22.4627 0.0003 21.5057 0.9433 21.5057 2.1873C21.5057 2.9123 21.7797 3.4593 22.1897 3.9923C22.6817 4.5933 23.0507 5.2223 23.0507 5.9883C23.0507 7.3413 22.0797 8.3813 20.6177 8.3813C19.1547 8.3813 18.1977 7.3413 18.1977 5.9883C18.1977 5.2223 18.5527 4.5933 19.0447 3.9923C19.4547 3.4593 19.7287 2.9123 19.7287 2.1873C19.7287 0.9433 18.7717 0.0003 17.3767 0.0003H12.8787C9.9937 0.0003 8.2987 1.6813 8.2987 4.5113V8.7093C8.2987 8.9413 8.1347 9.0233 7.8747 8.8733C7.1777 8.4493 6.3297 8.1623 5.3597 8.1623C2.5977 8.1623 -0.0003 10.3223 -0.0003 13.7543C-0.0003 17.1723 2.5977 19.3323 5.3597 19.3323C6.3297 19.3323 7.1777 19.0453 7.8747 18.6213C8.1347 18.4703 8.2987 18.5523 8.2987 18.7853V22.9273C8.2987 25.7573 9.9937 27.4393 12.8787 27.4393ZM12.9197 24.2263C12.0447 24.2263 11.5117 23.7073 11.5117 22.8043V16.9943C11.5117 15.5993 10.5687 14.6293 9.3247 14.6293C8.5997 14.6293 8.0527 14.9023 7.5197 15.3263C6.9177 15.8043 6.2887 16.1733 5.5237 16.1733C4.1837 16.1733 3.1307 15.2163 3.1307 13.7543C3.1307 12.2913 4.1837 11.3203 5.5237 11.3203C6.2887 11.3203 6.9177 11.6893 7.5197 12.1683C8.0527 12.5913 8.5997 12.8653 9.3247 12.8653C10.5687 12.8653 11.5117 11.8943 11.5117 10.5133V4.6483C11.5117 3.7323 12.0447 3.2133 12.9197 3.2133H15.4217C15.9277 3.2133 15.8047 3.4593 15.6677 3.7463C15.2987 4.4703 15.0387 5.2773 15.0387 6.1523C15.0387 8.9143 17.1857 11.5113 20.6177 11.5113C24.0487 11.5113 26.1957 8.9143 26.1957 6.1523C26.1957 5.2773 25.9357 4.4703 25.5667 3.7463C25.4297 3.4593 25.3067 3.2133 25.8127 3.2133H28.3147C29.1897 3.2133 29.7227 3.7323 29.7227 4.6483V10.5133C29.7227 11.8943 30.6657 12.8653 31.9097 12.8653C32.6347 12.8653 33.1817 12.5913 33.7147 12.1683C34.3167 11.6893 34.9457 11.3203 35.7107 11.3203C37.0507 11.3203 38.1037 12.2913 38.1037 13.7543C38.1037 15.2163 37.0507 16.1733 35.7107 16.1733C34.9457 16.1733 34.3167 15.8043 33.7147 15.3263C33.1817 14.9023 32.6347 14.6293 31.9097 14.6293C30.6657 14.6293 29.7227 15.5993 29.7227 16.9943V22.8043C29.7227 23.7073 29.1897 24.2263 28.3147 24.2263H25.8127C25.3067 24.2263 25.4297 23.9803 25.5667 23.7073C25.9357 22.9683 26.1957 22.1623 26.1957 21.2873C26.1957 18.5113 24.0627 15.9273 20.6177 15.9273C17.1717 15.9273 15.0387 18.5113 15.0387 21.2873C15.0387 22.1623 15.2987 22.9683 15.6677 23.7073C15.8047 23.9803 15.9277 24.2263 15.4217 24.2263Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.75390625 27.958984375"
          className={className}
        >
          <path
            d="              M13.0837 27.9591H17.5687C19.0857 27.9591 20.1797 26.9201 20.1797 25.5251C20.1797 24.6911 19.8787 24.1311 19.4957 23.5981C19.0727 23.0231 18.7167 22.4631 18.7167 21.7251C18.7167 20.4801 19.5647 19.5921 20.8767 19.5921C22.1897 19.5921 23.0367 20.4801 23.0367 21.7251C23.0367 22.4631 22.6817 23.0231 22.2577 23.5981C21.8747 24.1311 21.5747 24.6911 21.5747 25.5251C21.5747 26.9201 22.6677 27.9591 24.1857 27.9591H28.6697C31.6227 27.9591 33.4687 26.1411 33.4687 23.2421V19.4691C33.4687 19.2361 33.6327 19.1541 33.8927 19.2911C34.5077 19.6191 35.2737 19.8101 36.1617 19.8101C39.0057 19.8101 41.7537 17.6231 41.7537 14.0001C41.7537 10.3631 39.0057 8.1761 36.1617 8.1761C35.2737 8.1761 34.5077 8.3671 33.8927 8.6951C33.6327 8.8321 33.4687 8.7501 33.4687 8.5171V4.7171C33.4687 1.8181 31.6227 0.0001 28.6697 0.0001H24.1857C22.6677 0.0001 21.5747 1.0531 21.5747 2.4331C21.5747 3.2671 21.8747 3.8421 22.2577 4.3611C22.6817 4.9351 23.0367 5.4961 23.0367 6.2481C23.0367 7.4651 22.1757 8.3811 20.8767 8.3811C19.5777 8.3811 18.7167 7.4651 18.7167 6.2481C18.7167 5.4961 19.0727 4.9351 19.4957 4.3611C19.8787 3.8421 20.1797 3.2671 20.1797 2.4331C20.1797 1.0531 19.0857 0.0001 17.5687 0.0001H13.0837C10.1307 0.0001 8.2987 1.8181 8.2987 4.7171V8.5171C8.2987 8.7501 8.1347 8.8321 7.8617 8.6951C7.2457 8.3671 6.4807 8.1761 5.5917 8.1761C2.7477 8.1761 -0.0003 10.3631 -0.0003 14.0001C-0.0003 17.6231 2.7477 19.8101 5.5917 19.8101C6.4807 19.8101 7.2457 19.6191 7.8617 19.2911C8.1347 19.1541 8.2987 19.2361 8.2987 19.4691V23.2421C8.2987 26.1411 10.1307 27.9591 13.0837 27.9591ZM13.1247 24.2261C12.4547 24.2261 12.0317 23.8031 12.0317 23.1051V17.3081C12.0317 15.7771 10.9927 14.6971 9.5977 14.6971C8.7637 14.6971 8.2027 14.9981 7.6697 15.3811C7.0957 15.8051 6.5347 16.1601 5.7967 16.1601C4.5667 16.1601 3.6637 15.2991 3.6637 14.0001C3.6637 12.6871 4.5667 11.8261 5.7967 11.8261C6.5347 11.8261 7.0957 12.1821 7.6697 12.6051C8.2027 12.9881 8.7637 13.2891 9.5977 13.2891C10.9927 13.2891 12.0317 12.2091 12.0317 10.6781V4.8531C12.0317 4.1561 12.4547 3.7461 13.1247 3.7461H15.2847C15.7227 3.7461 15.6407 3.9371 15.5317 4.2381C15.2437 4.9221 15.0527 5.6601 15.0527 6.4391C15.0527 9.2831 17.2407 12.0311 20.8767 12.0311C24.5137 12.0311 26.7017 9.2831 26.7017 6.4391C26.7017 5.6601 26.5097 4.9221 26.2227 4.2381C26.1137 3.9371 26.0317 3.7461 26.4687 3.7461H28.6427C29.2987 3.7461 29.7227 4.1561 29.7227 4.8531V10.6781C29.7227 12.2091 30.7757 13.2891 32.1567 13.2891C32.9907 13.2891 33.5647 12.9881 34.0837 12.6051C34.6587 12.1821 35.2187 11.8261 35.9707 11.8261C37.1877 11.8261 38.1037 12.6871 38.1037 14.0001C38.1037 15.2991 37.1877 16.1601 35.9707 16.1601C35.2187 16.1601 34.6587 15.8051 34.0837 15.3811C33.5647 14.9981 32.9907 14.6971 32.1567 14.6971C30.7757 14.6971 29.7227 15.7771 29.7227 17.3081V23.1051C29.7227 23.8031 29.2987 24.2261 28.6427 24.2261H26.4687C26.0317 24.2261 26.1137 24.0211 26.2227 23.7341C26.5097 23.0371 26.7017 22.2991 26.7017 21.5331C26.7017 18.6621 24.5137 15.9281 20.8767 15.9281C17.2407 15.9281 15.0527 18.6621 15.0527 21.5331C15.0527 22.2991 15.2437 23.0371 15.5317 23.7341C15.6407 24.0211 15.7227 24.2261 15.2847 24.2261Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.78515625 25.908203125"
          className={className}
        >
          <path
            d="              M12.1137 25.9087H16.7207C17.7187 25.9087 18.3617 25.2797 18.3617 24.4317C18.3617 23.9937 18.1837 23.5427 17.7597 23.0647C17.1177 22.3397 16.7067 21.5747 16.7067 20.6167C16.7067 18.8257 17.9237 17.5407 19.8927 17.5407C21.8617 17.5407 23.0777 18.8257 23.0777 20.6167C23.0777 21.5747 22.6547 22.3397 22.0257 23.0647C21.6017 23.5427 21.4237 23.9937 21.4237 24.4317C21.4237 25.2797 22.0667 25.9087 23.0647 25.9087H27.6717C30.0917 25.9087 31.4457 24.5817 31.4457 22.1897V16.9937C31.4457 16.7207 31.6637 16.5567 31.9517 16.7757C32.7847 17.3637 33.7427 17.9377 35.1227 17.9377C37.6797 17.9377 39.7847 15.9827 39.7847 13.0707C39.7847 10.1717 37.6797 8.2027 35.1227 8.2027C33.7427 8.2027 32.7847 8.7777 31.9517 9.3787C31.6637 9.5837 31.4457 9.4337 31.4457 9.1597V3.7187C31.4457 1.3257 30.0917 -0.0003 27.6717 -0.0003H23.0647C22.0667 -0.0003 21.4237 0.6287 21.4237 1.4767C21.4237 1.9137 21.6017 2.3657 22.0257 2.8437C22.6547 3.5687 23.0777 4.3337 23.0777 5.2907C23.0777 7.0277 21.8067 8.3807 19.8927 8.3807C17.9787 8.3807 16.7067 7.0277 16.7067 5.2907C16.7067 4.3337 17.1177 3.5687 17.7597 2.8437C18.1837 2.3657 18.3617 1.9137 18.3617 1.4767C18.3617 0.6287 17.7187 -0.0003 16.7207 -0.0003H12.1137C9.6937 -0.0003 8.3267 1.3257 8.3267 3.7187V9.1597C8.3267 9.4337 8.1207 9.5837 7.8337 9.3787C6.9867 8.7777 6.0427 8.2027 4.6617 8.2027C2.1057 8.2027 -0.0003 10.1717 -0.0003 13.0707C-0.0003 15.9827 2.1057 17.9377 4.6617 17.9377C6.0427 17.9377 6.9867 17.3637 7.8337 16.7757C8.1207 16.5567 8.3267 16.7207 8.3267 16.9937V22.1897C8.3267 24.5817 9.6937 25.9087 12.1137 25.9087ZM12.1547 24.2267C10.8417 24.2267 10.0217 23.4337 10.0217 22.1207V16.2417C10.0217 15.2437 9.3927 14.6017 8.5447 14.6017C8.1077 14.6017 7.6567 14.7797 7.1777 15.2027C6.4527 15.8457 5.6877 16.2557 4.7307 16.2557C2.9937 16.2557 1.6407 14.9977 1.6407 13.0707C1.6407 11.1567 2.9937 9.8847 4.7307 9.8847C5.6877 9.8847 6.4527 10.3087 7.1777 10.9377C7.6567 11.3617 8.1077 11.5527 8.5447 11.5527C9.3927 11.5527 10.0217 10.8967 10.0217 9.8987V3.8007C10.0217 2.4747 10.8417 1.6957 12.1547 1.6957H15.8187C16.3787 1.6957 16.3247 2.0097 16.1187 2.3107C15.5727 3.1307 15.0257 4.0327 15.0257 5.3597C15.0257 7.9157 16.9807 10.0217 19.8927 10.0217C22.7907 10.0217 24.7597 7.9157 24.7597 5.3597C24.7597 4.0327 24.2127 3.1307 23.6657 2.3107C23.4607 2.0097 23.4067 1.6957 23.9667 1.6957H27.6307C28.9437 1.6957 29.7637 2.4747 29.7637 3.8007V9.8987C29.7637 10.8967 30.3927 11.5527 31.2407 11.5527C31.6777 11.5527 32.1287 11.3617 32.6077 10.9377C33.3317 10.3087 34.0977 9.8847 35.0547 9.8847C36.7907 9.8847 38.1307 11.1567 38.1307 13.0707C38.1307 14.9977 36.7907 16.2557 35.0547 16.2557C34.0977 16.2557 33.3317 15.8457 32.6077 15.2027C32.1287 14.7797 31.6777 14.6017 31.2407 14.6017C30.3927 14.6017 29.7637 15.2437 29.7637 16.2417V22.1207C29.7637 23.4337 28.9437 24.2267 27.6307 24.2267H23.9667C23.4067 24.2267 23.4607 23.8987 23.6657 23.5977C24.2127 22.7777 24.7597 21.8887 24.7597 20.5487C24.7597 17.9237 22.8597 15.8867 19.8927 15.8867C16.9257 15.8867 15.0257 17.9237 15.0257 20.5487C15.0257 21.8887 15.5727 22.7777 16.1187 23.5977C16.3247 23.8987 16.3787 24.2267 15.8187 24.2267Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.60546875 26.783203125"
          className={className}
        >
          <path
            d="              M12.6327 26.7832H17.1447C18.3747 26.7832 19.1817 25.9632 19.1817 24.9242C19.1817 24.3222 18.9497 23.7752 18.4847 23.2562C17.9237 22.6132 17.5547 21.9022 17.5547 21.1092C17.5547 19.6052 18.6207 18.4022 20.3027 18.4022C21.9707 18.4022 23.0507 19.6052 23.0507 21.1092C23.0507 21.9022 22.6817 22.6132 22.1207 23.2562C21.6567 23.7752 21.4097 24.3222 21.4097 24.9242C21.4097 25.9632 22.2307 26.7832 23.4607 26.7832H27.9727C30.7617 26.7832 32.2927 25.2792 32.2927 22.5312V17.9512C32.2927 17.7322 32.4567 17.6232 32.7027 17.7872C33.5097 18.3342 34.4667 18.7172 35.5337 18.7172C38.1857 18.7172 40.6057 16.6252 40.6057 13.4392C40.6057 10.2542 38.1857 8.1482 35.5337 8.1482C34.4667 8.1482 33.5097 8.5312 32.7027 9.0782C32.4567 9.2422 32.2927 9.1462 32.2927 8.9142V4.2522C32.2927 1.5042 30.7617 0.0002 27.9727 0.0002H23.4607C22.2307 0.0002 21.4097 0.8202 21.4097 1.8732C21.4097 2.4612 21.6567 3.0082 22.1207 3.5272C22.6817 4.1702 23.0507 4.8812 23.0507 5.6742C23.0507 7.1642 21.9567 8.3812 20.3027 8.3812C18.6487 8.3812 17.5547 7.1642 17.5547 5.6742C17.5547 4.8812 17.9237 4.1702 18.4847 3.5272C18.9497 3.0082 19.1817 2.4612 19.1817 1.8732C19.1817 0.8202 18.3747 0.0002 17.1447 0.0002H12.6327C9.8297 0.0002 8.2987 1.5042 8.2987 4.2522V8.9142C8.2987 9.1462 8.1487 9.2422 7.9027 9.0782C7.0957 8.5312 6.1387 8.1482 5.0587 8.1482C2.4197 8.1482 -0.0003 10.2542 -0.0003 13.4392C-0.0003 16.6252 2.4197 18.7172 5.0587 18.7172C6.1387 18.7172 7.0957 18.3342 7.9027 17.7872C8.1487 17.6232 8.2987 17.7322 8.2987 17.9512V22.5312C8.2987 25.2792 9.8297 26.7832 12.6327 26.7832ZM12.6597 24.2262C11.5387 24.2262 10.8687 23.5702 10.8687 22.4082V16.5972C10.8687 15.3672 10.0487 14.5472 8.9957 14.5472C8.4087 14.5472 7.8617 14.7932 7.3277 15.2582C6.6857 15.8182 5.9887 16.1872 5.1957 16.1872C3.7047 16.1872 2.4887 15.0942 2.4887 13.4392C2.4887 11.7852 3.7047 10.6912 5.1957 10.6912C5.9887 10.6912 6.6857 11.0602 7.3277 11.6212C7.8617 12.0862 8.4087 12.3182 8.9957 12.3182C10.0487 12.3182 10.8687 11.5122 10.8687 10.2812V4.3752C10.8687 3.2132 11.5387 2.5702 12.6597 2.5702H15.5727C16.1737 2.5702 15.9957 2.8572 15.8457 3.1312C15.3677 3.9242 15.0117 4.7992 15.0117 5.8102C15.0117 8.4492 17.1177 10.8692 20.3027 10.8692C23.4887 10.8692 25.5797 8.4492 25.5797 5.8102C25.5797 4.7992 25.2387 3.9242 24.7597 3.1312C24.6097 2.8572 24.4317 2.5702 25.0197 2.5702H27.9317C29.0667 2.5702 29.7367 3.2132 29.7367 4.3752V10.2812C29.7367 11.5122 30.5567 12.3182 31.5957 12.3182C32.1977 12.3182 32.7437 12.0862 33.2637 11.6212C33.9067 11.0602 34.6177 10.6912 35.4097 10.6912C36.8867 10.6912 38.1177 11.7852 38.1177 13.4392C38.1177 15.0942 36.8867 16.1872 35.4097 16.1872C34.6177 16.1872 33.9067 15.8182 33.2637 15.2582C32.7437 14.7932 32.1977 14.5472 31.5957 14.5472C30.5567 14.5472 29.7367 15.3672 29.7367 16.5972V22.4082C29.7367 23.5702 29.0667 24.2262 27.9317 24.2262H25.0197C24.4317 24.2262 24.6097 23.9262 24.7597 23.6522C25.2387 22.8592 25.5797 21.9842 25.5797 20.9862C25.5797 18.3202 23.5017 15.9142 20.3027 15.9142C17.0897 15.9142 15.0117 18.3202 15.0117 20.9862C15.0117 21.9842 15.3677 22.8592 15.8457 23.6522C15.9957 23.9262 16.1737 24.2262 15.5727 24.2262Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.25 26.427734375"
          className={className}
        >
          <path
            d="              M12.4827 26.4275H17.0217C18.1567 26.4275 18.8807 25.6755 18.8807 24.7325C18.8807 24.2125 18.6617 23.6795 18.1697 23.1465C17.5687 22.4905 17.1997 21.7245 17.1997 20.9315C17.1997 19.3455 18.3337 18.0465 20.1247 18.0465C21.9157 18.0465 23.0507 19.3455 23.0507 20.9315C23.0507 21.7245 22.6677 22.4905 22.0667 23.1465C21.5877 23.6795 21.3687 24.2125 21.3687 24.7325C21.3687 25.6755 22.0937 26.4275 23.2287 26.4275H27.7537C30.5017 26.4275 31.9377 25.0195 31.9377 22.3125V17.4865C31.9377 17.2675 32.0877 17.1585 32.3337 17.3355C33.2087 17.9515 34.2067 18.3885 35.3417 18.3885C37.9257 18.3885 40.2497 16.3105 40.2497 13.2615C40.2497 10.2265 37.9257 8.1485 35.3417 8.1485C34.2067 8.1485 33.2087 8.5855 32.3337 9.2015C32.0877 9.3785 31.9377 9.2695 31.9377 9.0505V4.1155C31.9377 1.4085 30.5017 0.0005 27.7537 0.0005H23.2287C22.0937 0.0005 21.3687 0.7515 21.3687 1.6955C21.3687 2.2145 21.5877 2.7485 22.0667 3.2815C22.6677 3.9515 23.0507 4.7035 23.0507 5.5095C23.0507 7.0685 21.8887 8.3805 20.1247 8.3805C18.3617 8.3805 17.1997 7.0685 17.1997 5.5095C17.1997 4.7035 17.5687 3.9515 18.1697 3.2815C18.6617 2.7485 18.8807 2.2145 18.8807 1.6955C18.8807 0.7515 18.1567 0.0005 17.0217 0.0005H12.4827C9.7477 0.0005 8.3127 1.4085 8.3127 4.1155V9.0505C8.3127 9.2695 8.1617 9.3785 7.9157 9.2015C7.0407 8.5855 6.0427 8.1485 4.8947 8.1485C2.3247 8.1485 -0.0003 10.2265 -0.0003 13.2615C-0.0003 16.3105 2.3247 18.3885 4.8947 18.3885C6.0427 18.3885 7.0407 17.9515 7.9157 17.3355C8.1617 17.1585 8.3127 17.2675 8.3127 17.4865V22.3125C8.3127 25.0195 9.7477 26.4275 12.4827 26.4275ZM12.5237 24.2265C11.2657 24.2265 10.5137 23.5155 10.5137 22.2035V16.3785C10.5137 15.2305 9.7617 14.5055 8.8187 14.5055C8.2987 14.5055 7.7657 14.7245 7.2327 15.2165C6.5627 15.8185 5.8107 16.2015 5.0037 16.2015C3.4457 16.2015 2.1327 15.0395 2.1327 13.2615C2.1327 11.4985 3.4457 10.3355 5.0037 10.3355C5.8107 10.3355 6.5627 10.7185 7.2327 11.3205C7.7657 11.8125 8.2987 12.0315 8.8187 12.0315C9.7617 12.0315 10.5137 11.3065 10.5137 10.1585V4.2245C10.5137 2.9255 11.2657 2.2015 12.5237 2.2015H15.6677C16.3107 2.2015 16.1057 2.5295 15.9417 2.7895C15.4087 3.6235 15.0117 4.5395 15.0117 5.6195C15.0117 8.1895 17.0767 10.5135 20.1247 10.5135C23.1737 10.5135 25.2387 8.1895 25.2387 5.6195C25.2387 4.5395 24.8417 3.6235 24.3087 2.7895C24.1447 2.5295 23.9397 2.2015 24.5817 2.2015H27.7267C28.9847 2.2015 29.7367 2.9255 29.7367 4.2245V10.1585C29.7367 11.3065 30.4887 12.0315 31.4317 12.0315C31.9517 12.0315 32.4847 11.8125 33.0177 11.3205C33.6737 10.7185 34.4397 10.3355 35.2327 10.3355C36.8047 10.3355 38.1177 11.4985 38.1177 13.2615C38.1177 15.0395 36.8047 16.2015 35.2327 16.2015C34.4397 16.2015 33.6737 15.8185 33.0177 15.2165C32.4847 14.7245 31.9517 14.5055 31.4317 14.5055C30.4887 14.5055 29.7367 15.2305 29.7367 16.3785V22.2035C29.7367 23.5155 28.9847 24.2265 27.7267 24.2265H24.5817C23.9397 24.2265 24.1447 23.8985 24.3087 23.6385C24.8417 22.8045 25.2387 21.8885 25.2387 20.8225C25.2387 18.2105 23.2017 15.9145 20.1247 15.9145C17.0487 15.9145 15.0117 18.2105 15.0117 20.8225C15.0117 21.8885 15.4087 22.8045 15.9417 23.6385C16.1057 23.8985 16.3107 24.2265 15.6677 24.2265Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.87890625 27.056640625"
          className={className}
        >
          <path
            d="              M12.7427 27.0569H17.2407C18.5387 27.0569 19.4137 26.1949 19.4137 25.0609C19.4137 24.4179 19.1677 23.8579 18.7307 23.3379C18.1977 22.7089 17.8277 22.0389 17.8277 21.2459C17.8277 19.8109 18.8537 18.6899 20.4397 18.6899C22.0257 18.6899 23.0507 19.8109 23.0507 21.2459C23.0507 22.0389 22.6817 22.7089 22.1487 23.3379C21.7107 23.8579 21.4517 24.4179 21.4517 25.0609C21.4517 26.1949 22.3267 27.0569 23.6247 27.0569H28.1367C30.9667 27.0569 32.5667 25.4839 32.5667 22.6949V18.3069C32.5667 18.0879 32.7307 17.9919 32.9907 18.1429C33.7427 18.6349 34.6587 18.9769 35.6837 18.9769C38.3767 18.9769 40.8787 16.8569 40.8787 13.5629C40.8787 10.2809 38.3767 8.1489 35.6837 8.1489C34.6587 8.1489 33.7427 8.4899 32.9907 8.9959C32.7307 9.1469 32.5667 9.0509 32.5667 8.8179V4.3609C32.5667 1.5719 30.9667 -0.0001 28.1367 -0.0001H23.6247C22.3267 -0.0001 21.4517 0.8749 21.4517 1.9959C21.4517 2.6519 21.7107 3.1989 22.1487 3.7319C22.6817 4.3479 23.0507 5.0309 23.0507 5.8109C23.0507 7.2319 22.0117 8.3809 20.4397 8.3809C18.8677 8.3809 17.8277 7.2319 17.8277 5.8109C17.8277 5.0309 18.1977 4.3479 18.7307 3.7319C19.1677 3.1989 19.4137 2.6519 19.4137 1.9959C19.4137 0.8749 18.5387 -0.0001 17.2407 -0.0001H12.7427C9.9117 -0.0001 8.2987 1.5719 8.2987 4.3609V8.8179C8.2987 9.0509 8.1487 9.1469 7.8887 8.9959C7.1227 8.4899 6.2207 8.1489 5.1957 8.1489C2.5017 8.1489 -0.0003 10.2809 -0.0003 13.5629C-0.0003 16.8569 2.5017 18.9769 5.1957 18.9769C6.2207 18.9769 7.1227 18.6349 7.8887 18.1429C8.1487 17.9919 8.2987 18.0879 8.2987 18.3069V22.6949C8.2987 25.4839 9.9117 27.0569 12.7427 27.0569ZM12.7697 24.2129C11.7577 24.2129 11.1427 23.6249 11.1427 22.5719V16.7619C11.1427 15.4629 10.2677 14.5879 9.1467 14.5879C8.4907 14.5879 7.9437 14.8339 7.4097 15.2849C6.7817 15.8049 6.1117 16.1739 5.3317 16.1739C3.9097 16.1739 2.7617 15.1349 2.7617 13.5629C2.7617 11.9899 3.9097 10.9509 5.3317 10.9509C6.1117 10.9509 6.7817 11.3199 7.4097 11.8539C7.9437 12.2909 8.4907 12.5509 9.1467 12.5509C10.2677 12.5509 11.1427 11.6759 11.1427 10.3769V4.4839C11.1427 3.4319 11.7577 2.8439 12.7697 2.8439H15.5037C16.0647 2.8439 15.9137 3.1169 15.7637 3.3909C15.3397 4.1559 15.0257 5.0039 15.0257 5.9469C15.0257 8.6409 17.1447 11.1429 20.4397 11.1429C23.7207 11.1429 25.8537 8.6409 25.8537 5.9469C25.8537 5.0039 25.5387 4.1559 25.1017 3.3909C24.9647 3.1169 24.8007 2.8439 25.3617 2.8439H28.1097C29.1207 2.8439 29.7367 3.4319 29.7367 4.4839V10.3769C29.7367 11.6759 30.5977 12.5509 31.7327 12.5509C32.3747 12.5509 32.9357 12.2909 33.4547 11.8539C34.0837 11.3199 34.7537 10.9509 35.5467 10.9509C36.9687 10.9509 38.1037 11.9899 38.1037 13.5629C38.1037 15.1349 36.9687 16.1739 35.5467 16.1739C34.7537 16.1739 34.0837 15.8049 33.4547 15.2849C32.9357 14.8339 32.3747 14.5879 31.7327 14.5879C30.5977 14.5879 29.7367 15.4629 29.7367 16.7619V22.5719C29.7367 23.6249 29.1207 24.2129 28.1097 24.2129H25.3617C24.8007 24.2129 24.9647 23.9529 25.1017 23.6659C25.5387 22.8999 25.8537 22.0529 25.8537 21.1089C25.8537 18.3889 23.7477 15.9139 20.4397 15.9139C17.1307 15.9139 15.0257 18.3889 15.0257 21.1089C15.0257 22.0529 15.3397 22.8999 15.7637 23.6659C15.9137 23.9529 16.0647 24.2129 15.5037 24.2129Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.169921875 25.23828125"
          className={className}
        >
          <path
            d="              M11.6207 25.2379H16.3247C17.1307 25.2379 17.6777 24.7459 17.6777 24.0349C17.6777 23.6929 17.5407 23.3519 17.1997 22.9549C16.5297 22.1489 16.0647 21.3829 16.0647 20.2209C16.0647 18.1429 17.3767 16.8579 19.5777 16.8579C21.7927 16.8579 23.1057 18.1429 23.1057 20.2209C23.1057 21.3829 22.6407 22.1489 21.9707 22.9549C21.6287 23.3519 21.4787 23.6929 21.4787 24.0349C21.4787 24.7459 22.0387 25.2379 22.8457 25.2379H27.5487C29.5587 25.2379 30.8027 23.9939 30.8027 22.0389V16.3379C30.8027 15.9829 31.0897 15.7769 31.4457 16.0239C32.2387 16.5979 33.1267 17.3499 34.8357 17.3499C37.3517 17.3499 39.1697 15.5449 39.1697 12.8109C39.1697 10.0899 37.3517 8.2849 34.8357 8.2849C33.1267 8.2849 32.2387 9.0369 31.4457 9.6109C31.0897 9.8579 30.8027 9.6519 30.8027 9.2969V3.1859C30.8027 1.2309 29.5587 -0.0001 27.5487 -0.0001H22.8457C22.0387 -0.0001 21.4787 0.4789 21.4787 1.1899C21.4787 1.5309 21.6287 1.8729 21.9707 2.2699C22.6407 3.0899 23.1057 3.8559 23.1057 5.0179C23.1057 6.9859 21.7107 8.3669 19.5777 8.3669C17.4587 8.3669 16.0647 6.9859 16.0647 5.0179C16.0647 3.8559 16.5297 3.0899 17.1997 2.2699C17.5407 1.8729 17.6777 1.5309 17.6777 1.1899C17.6777 0.4789 17.1307 -0.0001 16.3247 -0.0001H11.6207C9.6117 -0.0001 8.3677 1.2309 8.3677 3.1859V9.2969C8.3677 9.6519 8.0797 9.8579 7.7247 9.6109C6.9317 9.0369 6.0427 8.2849 4.3337 8.2849C1.8047 8.2849 -0.0003 10.0899 -0.0003 12.8109C-0.0003 15.5449 1.8047 17.3499 4.3337 17.3499C6.0427 17.3499 6.9317 16.5979 7.7247 16.0239C8.0797 15.7769 8.3677 15.9829 8.3677 16.3379V22.0389C8.3677 23.9939 9.6117 25.2379 11.6207 25.2379ZM11.6617 24.2129C10.2817 24.2129 9.3787 23.3519 9.3787 21.9979V16.0779C9.3787 15.2719 8.8867 14.7249 8.1757 14.7249C7.8337 14.7249 7.5057 14.8609 7.0957 15.2029C6.2887 15.8729 5.5237 16.3379 4.3617 16.3379C2.3787 16.3379 0.9977 14.9429 0.9977 12.8109C0.9977 10.6909 2.3787 9.2969 4.3617 9.2969C5.5237 9.2969 6.2887 9.7619 7.0957 10.4319C7.5057 10.7739 7.8337 10.9099 8.1757 10.9099C8.8867 10.9099 9.3787 10.3629 9.3787 9.5569V3.2269C9.3787 1.8729 10.2817 1.0119 11.6617 1.0119H16.0097C16.4477 1.0119 16.5977 1.3259 16.3517 1.6819C15.7907 2.4749 15.0527 3.3499 15.0527 5.0309C15.0527 7.5609 16.8577 9.3789 19.5777 9.3789C22.3127 9.3789 24.1177 7.5609 24.1177 5.0309C24.1177 3.3499 23.3787 2.4749 22.8187 1.6819C22.5727 1.3259 22.7087 1.0119 23.1597 1.0119H27.5077C28.8887 1.0119 29.7907 1.8729 29.7907 3.2269V9.5569C29.7907 10.3629 30.2837 10.9099 30.9937 10.9099C31.3357 10.9099 31.6637 10.7739 32.0607 10.4319C32.8807 9.7619 33.6467 9.2969 34.8087 9.2969C36.7907 9.2969 38.1717 10.6909 38.1717 12.8109C38.1717 14.9429 36.7907 16.3379 34.8087 16.3379C33.6467 16.3379 32.8807 15.8729 32.0607 15.2029C31.6637 14.8609 31.3357 14.7249 30.9937 14.7249C30.2837 14.7249 29.7907 15.2719 29.7907 16.0779V21.9979C29.7907 23.3519 28.8887 24.2129 27.5077 24.2129H23.1597C22.7087 24.2129 22.5727 23.8989 22.8187 23.5429C23.3787 22.7499 24.1177 21.8749 24.1177 20.1929C24.1177 17.5679 22.4087 15.8589 19.5777 15.8589C16.7617 15.8589 15.0527 17.5679 15.0527 20.1929C15.0527 21.8749 15.7907 22.7499 16.3517 23.5429C16.5977 23.8989 16.4477 24.2129 16.0097 24.2129Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.85546875 24.896484375"
          className={className}
        >
          <path
            d="              M11.3747 24.8968H16.1187C16.8297 24.8968 17.3357 24.4858 17.3357 23.8438C17.3357 23.5568 17.2127 23.2698 16.9257 22.9138C16.2287 22.0528 15.7367 21.2868 15.7367 20.0158C15.7367 17.8148 17.0897 16.5158 19.4277 16.5158C21.7517 16.5158 23.1187 17.8148 23.1187 20.0158C23.1187 21.2868 22.6267 22.0528 21.9297 22.9138C21.6427 23.2698 21.5197 23.5568 21.5197 23.8438C21.5197 24.4858 22.0257 24.8968 22.7227 24.8968H27.4807C29.2717 24.8968 30.4747 23.7068 30.4747 21.9708V16.0098C30.4747 15.6268 30.7887 15.3808 31.1857 15.6678C31.9647 16.2148 32.8127 17.0628 34.6857 17.0628C37.1877 17.0628 38.8557 15.3258 38.8557 12.7008C38.8557 10.0758 37.1877 8.3258 34.6857 8.3258C32.8127 8.3258 31.9647 9.1738 31.1857 9.7348C30.7887 10.0218 30.4747 9.7618 30.4747 9.3788V2.9258C30.4747 1.1898 29.2717 -0.0002 27.4807 -0.0002H22.7227C22.0257 -0.0002 21.5197 0.4098 21.5197 1.0528C21.5197 1.3538 21.6427 1.6268 21.9297 1.9828C22.6267 2.8438 23.1187 3.6098 23.1187 4.8808C23.1187 6.9858 21.6567 8.3808 19.4277 8.3808C17.1997 8.3808 15.7367 6.9858 15.7367 4.8808C15.7367 3.6098 16.2287 2.8438 16.9257 1.9828C17.2127 1.6268 17.3357 1.3538 17.3357 1.0528C17.3357 0.4098 16.8297 -0.0002 16.1187 -0.0002H11.3747C9.5837 -0.0002 8.3807 1.1898 8.3807 2.9258V9.3788C8.3807 9.7618 8.0667 10.0218 7.6697 9.7348C6.8907 9.1738 6.0427 8.3258 4.1697 8.3258C1.6677 8.3258 -0.0003 10.0758 -0.0003 12.7008C-0.0003 15.3258 1.6677 17.0628 4.1697 17.0628C6.0427 17.0628 6.8907 16.2148 7.6697 15.6678C8.0667 15.3808 8.3807 15.6268 8.3807 16.0098V21.9708C8.3807 23.7068 9.5837 24.8968 11.3747 24.8968ZM11.4157 24.2268C9.9937 24.2268 9.0507 23.3108 9.0507 21.9568V15.9958C9.0507 15.2848 8.6407 14.7928 7.9977 14.7928C7.6977 14.7928 7.4237 14.9158 7.0687 15.2028C6.2067 15.9008 5.4417 16.3928 4.1697 16.3928C2.0647 16.3928 0.6697 14.9158 0.6697 12.7008C0.6697 10.4728 2.0647 8.9958 4.1697 8.9958C5.4417 8.9958 6.2067 9.4878 7.0687 10.1858C7.4237 10.4858 7.6977 10.6098 7.9977 10.6098C8.6407 10.6098 9.0507 10.1038 9.0507 9.3928V2.9528C9.0507 1.5858 9.9937 0.6698 11.4157 0.6698H16.1187C16.4887 0.6698 16.7477 0.9848 16.4607 1.3668C15.9007 2.1598 15.0667 3.0078 15.0667 4.8808C15.0667 7.3828 16.8027 9.0508 19.4277 9.0508C22.0527 9.0508 23.7887 7.3828 23.7887 4.8808C23.7887 3.0078 22.9417 2.1598 22.3947 1.3668C22.1077 0.9848 22.3677 0.6698 22.7367 0.6698H27.4397C28.8617 0.6698 29.8047 1.5858 29.8047 2.9528V9.3928C29.8047 10.1038 30.2147 10.6098 30.8577 10.6098C31.1587 10.6098 31.4317 10.4858 31.7867 10.1858C32.6487 9.4878 33.4137 8.9958 34.6857 8.9958C36.7907 8.9958 38.1857 10.4728 38.1857 12.7008C38.1857 14.9158 36.7907 16.3928 34.6857 16.3928C33.4137 16.3928 32.6487 15.9008 31.7867 15.2028C31.4317 14.9158 31.1587 14.7928 30.8577 14.7928C30.2147 14.7928 29.8047 15.2848 29.8047 15.9958V21.9568C29.8047 23.3108 28.8617 24.2268 27.4397 24.2268H22.7367C22.3677 24.2268 22.1077 23.9118 22.3947 23.5288C22.9417 22.7358 23.7887 21.8888 23.7887 20.0288C23.7887 17.3908 22.1757 15.8458 19.4277 15.8458C16.6797 15.8458 15.0667 17.3908 15.0667 20.0288C15.0667 21.8888 15.9007 22.7358 16.4607 23.5288C16.7477 23.9118 16.4887 24.2268 16.1187 24.2268Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}