import { IconProps } from "../../types"

export default function LightStrip2FillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.798828125 39.375"
          className={className}
        >
          <path
            d="              M-0.0003 31.4456C-0.0003 34.2206 1.6957 35.9436 4.4157 35.9436H10.2537C12.9747 35.9436 14.6697 34.2206 14.6697 31.4456V7.9296C14.6697 5.6606 13.5487 4.1016 11.6617 3.5956V1.6816C11.6617 0.7516 10.8967 -0.0004 9.9667 -0.0004C9.0367 -0.0004 8.2847 0.7516 8.2847 1.6816V3.4176H6.3847V1.6816C6.3847 0.7516 5.6187 -0.0004 4.7027 -0.0004C3.7737 -0.0004 3.0077 0.7516 3.0077 1.6816V3.5276C1.0117 3.9376 -0.0003 5.5506 -0.0003 7.9296ZM18.1287 31.4456C18.1287 33.8246 19.1407 35.4376 21.1367 35.8476V37.6936C21.1367 38.6226 21.9027 39.3746 22.8317 39.3746C23.7617 39.3746 24.5137 38.6226 24.5137 37.6936V35.9436H26.4137V37.6936C26.4137 38.6226 27.1657 39.3746 28.0957 39.3746C29.0257 39.3746 29.7907 38.6226 29.7907 37.6936V35.7656C31.6777 35.2736 32.7987 33.7016 32.7987 31.4456V7.9296C32.7987 5.1546 31.1037 3.4316 28.3827 3.4316H22.5447C19.8247 3.4316 18.1287 5.1546 18.1287 7.9296ZM7.3277 11.2516C6.4117 11.2516 5.6737 10.5136 5.6737 9.5836C5.6737 8.6546 6.4117 7.9296 7.3277 7.9296C8.2577 7.9296 8.9957 8.6546 8.9957 9.5836C8.9957 10.5136 8.2577 11.2516 7.3277 11.2516ZM25.4707 11.2796C24.5407 11.2796 23.8027 10.5406 23.8027 9.6246C23.8027 8.6956 24.5407 7.9566 25.4707 7.9566C26.3867 7.9566 27.1247 8.6956 27.1247 9.6246C27.1247 10.5406 26.3867 11.2796 25.4707 11.2796ZM7.3277 16.2966C6.4117 16.2966 5.6737 15.5446 5.6737 14.6156C5.6737 13.6996 6.4117 12.9606 7.3277 12.9606C8.2577 12.9606 8.9957 13.6996 8.9957 14.6156C8.9957 15.5446 8.2577 16.2966 7.3277 16.2966ZM25.4707 16.3376C24.5407 16.3376 23.8027 15.5856 23.8027 14.6566C23.8027 13.7266 24.5407 12.9886 25.4707 12.9886C26.3867 12.9886 27.1247 13.7266 27.1247 14.6566C27.1247 15.5856 26.3867 16.3376 25.4707 16.3376ZM7.3277 21.3286C6.4117 21.3286 5.6737 20.5896 5.6737 19.6736C5.6737 18.7446 6.4117 18.0056 7.3277 18.0056C8.2577 18.0056 8.9957 18.7446 8.9957 19.6736C8.9957 20.5896 8.2577 21.3286 7.3277 21.3286ZM25.4707 21.3696C24.5407 21.3696 23.8027 20.6306 23.8027 19.7016C23.8027 18.7716 24.5407 18.0336 25.4707 18.0336C26.3867 18.0336 27.1247 18.7716 27.1247 19.7016C27.1247 20.6306 26.3867 21.3696 25.4707 21.3696ZM7.3277 26.3866C6.4117 26.3866 5.6737 25.6486 5.6737 24.7186C5.6737 23.7886 6.4117 23.0376 7.3277 23.0376C8.2577 23.0376 8.9957 23.7886 8.9957 24.7186C8.9957 25.6486 8.2577 26.3866 7.3277 26.3866ZM25.4707 26.4136C24.5407 26.4136 23.8027 25.6756 23.8027 24.7456C23.8027 23.8296 24.5407 23.0646 25.4707 23.0646C26.3867 23.0646 27.1247 23.8296 27.1247 24.7456C27.1247 25.6756 26.3867 26.4136 25.4707 26.4136ZM7.3277 31.4176C6.4117 31.4176 5.6737 30.6796 5.6737 29.7496C5.6737 28.8206 6.4117 28.0816 7.3277 28.0816C8.2577 28.0816 8.9957 28.8206 8.9957 29.7496C8.9957 30.6796 8.2577 31.4176 7.3277 31.4176ZM25.4707 31.4456C24.5407 31.4456 23.8027 30.7066 23.8027 29.7776C23.8027 28.8616 24.5407 28.1226 25.4707 28.1226C26.3867 28.1226 27.1247 28.8616 27.1247 29.7776C27.1247 30.7066 26.3867 31.4456 25.4707 31.4456Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.30078125 36.75"
          className={className}
        >
          <path
            d="              M-0.0003 29.8731C-0.0003 32.1701 1.3537 33.5371 3.6227 33.5371H8.8867C11.1567 33.5371 12.5237 32.1701 12.5237 29.8591V6.8631C12.5237 4.9351 11.5667 3.6641 9.9397 3.2951V1.2851C9.9397 0.5601 9.3517 0.0001 8.6407 0.0001C7.9157 0.0001 7.3417 0.5741 7.3417 1.2851V3.1851H5.1677V1.2851C5.1677 0.5741 4.5937 0.0001 3.8687 0.0001C3.1587 0.0001 2.5837 0.5601 2.5837 1.2851V3.2541C0.8887 3.5821 -0.0003 4.8811 -0.0003 6.8501ZM15.7777 29.8871C15.7777 31.8691 16.6657 33.1681 18.3617 33.4821V35.4651C18.3617 36.1761 18.9357 36.7501 19.6597 36.7501C20.3707 36.7501 20.9587 36.1761 20.9587 35.4651V33.5641H23.1187V35.4651C23.1187 36.1761 23.6937 36.7501 24.4177 36.7501C25.1287 36.7501 25.7167 36.1761 25.7167 35.4651V33.4551C27.3437 33.0861 28.3007 31.8011 28.3007 29.8871V6.8771C28.3007 4.5801 26.9337 3.1991 24.6637 3.1991H19.4007C17.1307 3.1991 15.7777 4.5801 15.7777 6.8771ZM6.2617 10.2951C5.4417 10.2951 4.7847 9.6521 4.7847 8.8321C4.7847 8.0121 5.4417 7.3551 6.2617 7.3551C7.0817 7.3551 7.7247 8.0121 7.7247 8.8321C7.7247 9.6521 7.0817 10.2951 6.2617 10.2951ZM22.0387 10.3221C21.2187 10.3221 20.5627 9.6661 20.5627 8.8591C20.5627 8.0251 21.2187 7.3831 22.0387 7.3831C22.8597 7.3831 23.5157 8.0251 23.5157 8.8591C23.5157 9.6661 22.8597 10.3221 22.0387 10.3221ZM6.2617 15.0661C5.4417 15.0661 4.7847 14.4101 4.7847 13.5901C4.7847 12.7691 5.4417 12.1131 6.2617 12.1131C7.0817 12.1131 7.7247 12.7691 7.7247 13.5901C7.7247 14.4101 7.0817 15.0661 6.2617 15.0661ZM22.0387 15.0941C21.2187 15.0941 20.5627 14.4371 20.5627 13.6171C20.5627 12.7971 21.2187 12.1411 22.0387 12.1411C22.8597 12.1411 23.5157 12.7971 23.5157 13.6171C23.5157 14.4371 22.8597 15.0941 22.0387 15.0941ZM6.2617 19.8241C5.4417 19.8241 4.7847 19.1821 4.7847 18.3611C4.7847 17.5411 5.4417 16.8851 6.2617 16.8851C7.0817 16.8851 7.7247 17.5411 7.7247 18.3611C7.7247 19.1821 7.0817 19.8241 6.2617 19.8241ZM22.0387 19.8511C21.2187 19.8511 20.5627 19.2091 20.5627 18.3891C20.5627 17.5681 21.2187 16.9121 22.0387 16.9121C22.8597 16.9121 23.5157 17.5681 23.5157 18.3891C23.5157 19.2091 22.8597 19.8511 22.0387 19.8511ZM6.2617 24.6091C5.4417 24.6091 4.7847 23.9531 4.7847 23.1331C4.7847 22.3121 5.4417 21.6421 6.2617 21.6421C7.0817 21.6421 7.7247 22.3121 7.7247 23.1331C7.7247 23.9531 7.0817 24.6091 6.2617 24.6091ZM22.0387 24.6231C21.2187 24.6231 20.5627 23.9801 20.5627 23.1601C20.5627 22.3401 21.2187 21.6831 22.0387 21.6831C22.8597 21.6831 23.5157 22.3401 23.5157 23.1601C23.5157 23.9801 22.8597 24.6231 22.0387 24.6231ZM6.2617 29.3671C5.4417 29.3671 4.7847 28.7111 4.7847 27.8911C4.7847 27.0701 5.4417 26.4281 6.2617 26.4281C7.0817 26.4281 7.7247 27.0701 7.7247 27.8911C7.7247 28.7111 7.0817 29.3671 6.2617 29.3671ZM22.0387 29.3941C21.2187 29.3941 20.5627 28.7381 20.5627 27.9181C20.5627 27.0981 21.2187 26.4411 22.0387 26.4411C22.8597 26.4411 23.5157 27.0981 23.5157 27.9181C23.5157 28.7381 22.8597 29.3941 22.0387 29.3941Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.6796875 38.14453125"
          className={className}
        >
          <path
            d="              M-0.0003 30.7074C-0.0003 33.2504 1.5317 34.8084 4.0467 34.8084H9.6117C12.1137 34.8084 13.6587 33.2504 13.6587 30.6934V7.4234C13.6587 5.3324 12.6057 3.8964 10.8417 3.4594V1.5044C10.8417 0.6704 10.1717 0.0004 9.3377 0.0004C8.5177 0.0004 7.8337 0.6704 7.8337 1.5044V3.3084H5.8107V1.5044C5.8107 0.6704 5.1407 0.0004 4.3067 0.0004C3.4867 0.0004 2.8027 0.6704 2.8027 1.5044V3.4044C0.9567 3.7734 -0.0003 5.2364 -0.0003 7.4234ZM17.0217 30.7204C17.0217 32.9084 17.9787 34.3714 19.8247 34.7404V36.6404C19.8247 37.4744 20.4937 38.1444 21.3277 38.1444C22.1617 38.1444 22.8317 37.4744 22.8317 36.6404V34.8224H24.8557V36.6404C24.8557 37.4744 25.5257 38.1444 26.3597 38.1444C27.1937 38.1444 27.8637 37.4744 27.8637 36.6404V34.6854C29.6267 34.2484 30.6797 32.8124 30.6797 30.7074V7.4374C30.6797 4.8944 29.1347 3.3224 26.6327 3.3224H21.0687C18.5527 3.3224 17.0217 4.8944 17.0217 7.4374ZM6.8227 10.8004C5.9477 10.8004 5.2497 10.1034 5.2497 9.2284C5.2497 8.3534 5.9477 7.6564 6.8227 7.6564C7.6977 7.6564 8.3947 8.3534 8.3947 9.2284C8.3947 10.1034 7.6977 10.8004 6.8227 10.8004ZM23.8437 10.8414C22.9687 10.8414 22.2717 10.1444 22.2717 9.2554C22.2717 8.3804 22.9687 7.6834 23.8437 7.6834C24.7187 7.6834 25.4157 8.3804 25.4157 9.2554C25.4157 10.1444 24.7187 10.8414 23.8437 10.8414ZM6.8227 15.7224C5.9477 15.7224 5.2497 15.0114 5.2497 14.1364C5.2497 13.2614 5.9477 12.5644 6.8227 12.5644C7.6977 12.5644 8.3947 13.2614 8.3947 14.1364C8.3947 15.0114 7.6977 15.7224 6.8227 15.7224ZM23.8437 15.7504C22.9687 15.7504 22.2717 15.0394 22.2717 14.1644C22.2717 13.2894 22.9687 12.5914 23.8437 12.5914C24.7187 12.5914 25.4157 13.2894 25.4157 14.1644C25.4157 15.0394 24.7187 15.7504 23.8437 15.7504ZM6.8227 20.6304C5.9477 20.6304 5.2497 19.9334 5.2497 19.0584C5.2497 18.1834 5.9477 17.4864 6.8227 17.4864C7.6977 17.4864 8.3947 18.1834 8.3947 19.0584C8.3947 19.9334 7.6977 20.6304 6.8227 20.6304ZM23.8437 20.6584C22.9687 20.6584 22.2717 19.9614 22.2717 19.0864C22.2717 18.2114 22.9687 17.5134 23.8437 17.5134C24.7187 17.5134 25.4157 18.2114 25.4157 19.0864C25.4157 19.9614 24.7187 20.6584 23.8437 20.6584ZM6.8227 25.5394C5.9477 25.5394 5.2497 24.8414 5.2497 23.9664C5.2497 23.0914 5.9477 22.3804 6.8227 22.3804C7.6977 22.3804 8.3947 23.0914 8.3947 23.9664C8.3947 24.8414 7.6977 25.5394 6.8227 25.5394ZM23.8437 25.5804C22.9687 25.5804 22.2717 24.8824 22.2717 24.0074C22.2717 23.1194 22.9687 22.4224 23.8437 22.4224C24.7187 22.4224 25.4157 23.1194 25.4157 24.0074C25.4157 24.8824 24.7187 25.5804 23.8437 25.5804ZM6.8227 30.4474C5.9477 30.4474 5.2497 29.7504 5.2497 28.8754C5.2497 28.0004 5.9477 27.3024 6.8227 27.3024C7.6977 27.3024 8.3947 28.0004 8.3947 28.8754C8.3947 29.7504 7.6977 30.4474 6.8227 30.4474ZM23.8437 30.4744C22.9687 30.4744 22.2717 29.7774 22.2717 28.9024C22.2717 28.0274 22.9687 27.3304 23.8437 27.3304C24.7187 27.3304 25.4157 28.0274 25.4157 28.9024C25.4157 29.7774 24.7187 30.4744 23.8437 30.4744Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.162109375 32.662109375"
          className={className}
        >
          <path
            d="              M-0.0003 27.4803C-0.0003 29.0253 0.9027 29.9273 2.4747 29.9273H7.1097C8.6817 29.9273 9.5977 29.0253 9.5977 27.4663V5.1683C9.5977 3.7323 8.8047 2.8433 7.4517 2.7343V0.7113C7.4517 0.3143 7.1227 0.0003 6.7267 0.0003C6.3297 0.0003 6.0157 0.3143 6.0157 0.6973V2.7073H3.5817V0.6973C3.5817 0.3143 3.2537 0.0003 2.8577 0.0003C2.4607 0.0003 2.1467 0.3143 2.1467 0.7113V2.7203C0.7797 2.8433 -0.0003 3.7183 -0.0003 5.1683ZM12.5647 27.5083C12.5647 28.9433 13.3437 29.8183 14.7107 29.9413V31.9513C14.7107 32.3613 15.0257 32.6623 15.4217 32.6623C15.8187 32.6623 16.1467 32.3473 16.1467 31.9653V29.9553H18.5797V31.9653C18.5797 32.3473 18.8947 32.6623 19.2907 32.6623C19.7017 32.6623 20.0157 32.3613 20.0157 31.9513V29.9413C21.3827 29.8183 22.1617 28.9433 22.1617 27.4943V5.1953C22.1617 3.6363 21.2457 2.7343 19.6737 2.7343H15.0387C13.4807 2.7343 12.5647 3.6363 12.5647 5.1953ZM4.7987 8.6543C4.1287 8.6543 3.5957 8.1213 3.5957 7.4513C3.5957 6.7813 4.1287 6.2343 4.7987 6.2343C5.4687 6.2343 6.0017 6.7813 6.0017 7.4513C6.0017 8.1213 5.4687 8.6543 4.7987 8.6543ZM17.3637 8.6683C16.6937 8.6683 16.1597 8.1343 16.1597 7.4653C16.1597 6.7953 16.6937 6.2613 17.3637 6.2613C18.0337 6.2613 18.5667 6.7953 18.5667 7.4653C18.5667 8.1343 18.0337 8.6683 17.3637 8.6683ZM4.7987 13.0843C4.1287 13.0843 3.5957 12.5643 3.5957 11.8813C3.5957 11.2243 4.1287 10.6913 4.7987 10.6913C5.4687 10.6913 6.0017 11.2243 6.0017 11.8813C6.0017 12.5643 5.4687 13.0843 4.7987 13.0843ZM17.3637 13.1253C16.6937 13.1253 16.1597 12.5783 16.1597 11.9083C16.1597 11.2383 16.6937 10.7053 17.3637 10.7053C18.0337 10.7053 18.5667 11.2383 18.5667 11.9083C18.5667 12.5783 18.0337 13.1253 17.3637 13.1253ZM4.7987 17.5133C4.1287 17.5133 3.5957 16.9803 3.5957 16.3103C3.5957 15.6403 4.1287 15.1213 4.7987 15.1213C5.4687 15.1213 6.0017 15.6403 6.0017 16.3103C6.0017 16.9803 5.4687 17.5133 4.7987 17.5133ZM17.3637 17.5543C16.6937 17.5543 16.1597 17.0213 16.1597 16.3513C16.1597 15.6953 16.6937 15.1623 17.3637 15.1623C18.0337 15.1623 18.5667 15.6953 18.5667 16.3513C18.5667 17.0213 18.0337 17.5543 17.3637 17.5543ZM4.7987 21.9703C4.1287 21.9703 3.5957 21.4373 3.5957 20.7673C3.5957 20.0973 4.1287 19.5503 4.7987 19.5503C5.4687 19.5503 6.0017 20.0973 6.0017 20.7673C6.0017 21.4373 5.4687 21.9703 4.7987 21.9703ZM17.3637 21.9843C16.6937 21.9843 16.1597 21.4513 16.1597 20.7813C16.1597 20.1113 16.6937 19.5783 17.3637 19.5783C18.0337 19.5783 18.5667 20.1113 18.5667 20.7813C18.5667 21.4513 18.0337 21.9843 17.3637 21.9843ZM4.7987 26.4143C4.1287 26.4143 3.5957 25.8813 3.5957 25.1973C3.5957 24.5413 4.1287 24.0073 4.7987 24.0073C5.4687 24.0073 6.0017 24.5413 6.0017 25.1973C6.0017 25.8813 5.4687 26.4143 4.7987 26.4143ZM17.3637 26.4273C16.6937 26.4273 16.1597 25.8943 16.1597 25.2243C16.1597 24.5543 16.6937 24.0213 17.3637 24.0213C18.0337 24.0213 18.5667 24.5543 18.5667 25.2243C18.5667 25.8943 18.0337 26.4273 17.3637 26.4273Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.416015625 35.08203125"
          className={className}
        >
          <path
            d="              M-0.0003 28.8751C-0.0003 30.8571 1.1487 32.0061 3.1177 32.0061H8.0117C9.9807 32.0061 11.1427 30.8571 11.1427 28.8611V6.1801C11.1427 4.4841 10.2947 3.3911 8.8317 3.1031V1.0391C8.8317 0.4511 8.3677 0.0001 7.7797 0.0001C7.2047 0.0001 6.7407 0.4511 6.7407 1.0391V3.0351H4.4027V1.0391C4.4027 0.4511 3.9237 0.0001 3.3497 0.0001C2.7617 0.0001 2.3107 0.4511 2.3107 1.0391V3.0901C0.8067 3.3631 -0.0003 4.4571 -0.0003 6.1801ZM14.2737 28.9021C14.2737 30.6251 15.0937 31.7191 16.5837 31.9781V34.0431C16.5837 34.6311 17.0487 35.0821 17.6227 35.0821C18.2107 35.0821 18.6757 34.6171 18.6757 34.0431V32.0471H21.0137V34.0431C21.0137 34.6171 21.4787 35.0821 22.0527 35.0821C22.6407 35.0821 23.1057 34.6311 23.1057 34.0431V31.9651C24.5817 31.6911 25.4157 30.5981 25.4157 28.8891V6.2211C25.4157 4.2241 24.2677 3.0621 22.2847 3.0621H17.3907C15.4217 3.0621 14.2737 4.2241 14.2737 6.2071ZM5.5647 9.6931C4.8127 9.6931 4.2247 9.0921 4.2247 8.3531C4.2247 7.5881 4.8127 7.0001 5.5647 7.0001C6.3167 7.0001 6.9177 7.5881 6.9177 8.3531C6.9177 9.0921 6.3167 9.6931 5.5647 9.6931ZM19.8517 9.7211C19.0997 9.7211 18.4977 9.1191 18.4977 8.3671C18.4977 7.6151 19.0997 7.0141 19.8517 7.0141C20.6037 7.0141 21.1917 7.6151 21.1917 8.3671C21.1917 9.1191 20.6037 9.7211 19.8517 9.7211ZM5.5647 14.2871C4.8127 14.2871 4.2247 13.6851 4.2247 12.9331C4.2247 12.1821 4.8127 11.5941 5.5647 11.5941C6.3167 11.5941 6.9177 12.1821 6.9177 12.9331C6.9177 13.6851 6.3167 14.2871 5.5647 14.2871ZM19.8517 14.3141C19.0997 14.3141 18.4977 13.7131 18.4977 12.9611C18.4977 12.2091 19.0997 11.6071 19.8517 11.6071C20.6037 11.6071 21.1917 12.2091 21.1917 12.9611C21.1917 13.7131 20.6037 14.3141 19.8517 14.3141ZM5.5647 18.8671C4.8127 18.8671 4.2247 18.2791 4.2247 17.5271C4.2247 16.7751 4.8127 16.1741 5.5647 16.1741C6.3167 16.1741 6.9177 16.7751 6.9177 17.5271C6.9177 18.2791 6.3167 18.8671 5.5647 18.8671ZM19.8517 18.8941C19.0997 18.8941 18.4977 18.3071 18.4977 17.5551C18.4977 16.8031 19.0997 16.2011 19.8517 16.2011C20.6037 16.2011 21.1917 16.8031 21.1917 17.5551C21.1917 18.3071 20.6037 18.8941 19.8517 18.8941ZM5.5647 23.4741C4.8127 23.4741 4.2247 22.8731 4.2247 22.1211C4.2247 21.3691 4.8127 20.7671 5.5647 20.7671C6.3167 20.7671 6.9177 21.3691 6.9177 22.1211C6.9177 22.8731 6.3167 23.4741 5.5647 23.4741ZM19.8517 23.4881C19.0997 23.4881 18.4977 22.9001 18.4977 22.1481C18.4977 21.3831 19.0997 20.7951 19.8517 20.7951C20.6037 20.7951 21.1917 21.3831 21.1917 22.1481C21.1917 22.9001 20.6037 23.4881 19.8517 23.4881ZM5.5647 28.0681C4.8127 28.0681 4.2247 27.4671 4.2247 26.7151C4.2247 25.9631 4.8127 25.3611 5.5647 25.3611C6.3167 25.3611 6.9177 25.9631 6.9177 26.7151C6.9177 27.4671 6.3167 28.0681 5.5647 28.0681ZM19.8517 28.0821C19.0997 28.0821 18.4977 27.4801 18.4977 26.7281C18.4977 25.9761 19.0997 25.3891 19.8517 25.3891C20.6037 25.3891 21.1917 25.9761 21.1917 26.7281C21.1917 27.4801 20.6037 28.0821 19.8517 28.0821Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.802734375 34.138671875"
          className={className}
        >
          <path
            d="              M-0.0003 28.3143C-0.0003 30.1333 1.0257 31.1583 2.8297 31.1583H7.5197C9.3247 31.1583 10.3637 30.1333 10.3637 28.3013V5.8103C10.3637 4.2243 9.5837 3.2403 8.2027 3.0083V0.9023C8.2027 0.3963 7.8067 0.0003 7.3007 0.0003C6.7947 0.0003 6.3987 0.3963 6.3987 0.9023V2.9533H3.9647V0.9023C3.9647 0.3963 3.5547 0.0003 3.0487 0.0003C2.5427 0.0003 2.1597 0.3963 2.1597 0.9023V3.0083C0.7657 3.2403 -0.0003 4.2243 -0.0003 5.7973ZM13.4257 28.3553C13.4257 29.9273 14.2047 30.9123 15.5857 31.1443V33.2503C15.5857 33.7563 15.9827 34.1383 16.4887 34.1383C16.9937 34.1383 17.3907 33.7563 17.3907 33.2503V31.1993H19.8377V33.2503C19.8377 33.7563 20.2207 34.1383 20.7267 34.1383C21.2327 34.1383 21.6427 33.7563 21.6427 33.2503V31.1443C23.0237 30.8983 23.8027 29.9273 23.8027 28.3423V5.8513C23.8027 4.0193 22.7637 2.9943 20.9457 2.9943H16.2697C14.4517 2.9943 13.4257 4.0193 13.4257 5.8383ZM5.1817 9.3653C4.4707 9.3653 3.9097 8.7913 3.9097 8.0803C3.9097 7.3693 4.4707 6.7953 5.1817 6.7953C5.8927 6.7953 6.4667 7.3693 6.4667 8.0803C6.4667 8.7913 5.8927 9.3653 5.1817 9.3653ZM18.6077 9.3793C17.8967 9.3793 17.3357 8.8043 17.3357 8.0933C17.3357 7.3833 17.8967 6.8083 18.6077 6.8083C19.3317 6.8083 19.8927 7.3833 19.8927 8.0933C19.8927 8.8043 19.3317 9.3793 18.6077 9.3793ZM5.1817 13.8493C4.4707 13.8493 3.9097 13.2893 3.9097 12.5783C3.9097 11.8533 4.4707 11.2933 5.1817 11.2933C5.8927 11.2933 6.4667 11.8533 6.4667 12.5783C6.4667 13.2893 5.8927 13.8493 5.1817 13.8493ZM18.6077 13.8773C17.8967 13.8773 17.3357 13.3023 17.3357 12.5923C17.3357 11.8813 17.8967 11.3063 18.6077 11.3063C19.3317 11.3063 19.8927 11.8813 19.8927 12.5923C19.8927 13.3023 19.3317 13.8773 18.6077 13.8773ZM5.1817 18.3343C4.4707 18.3343 3.9097 17.7733 3.9097 17.0623C3.9097 16.3513 4.4707 15.7913 5.1817 15.7913C5.8927 15.7913 6.4667 16.3513 6.4667 17.0623C6.4667 17.7733 5.8927 18.3343 5.1817 18.3343ZM18.6077 18.3613C17.8967 18.3613 17.3357 17.8013 17.3357 17.0903C17.3357 16.3793 17.8967 15.8043 18.6077 15.8043C19.3317 15.8043 19.8927 16.3793 19.8927 17.0903C19.8927 17.8013 19.3317 18.3613 18.6077 18.3613ZM5.1817 22.8453C4.4707 22.8453 3.9097 22.2713 3.9097 21.5603C3.9097 20.8493 4.4707 20.2753 5.1817 20.2753C5.8927 20.2753 6.4667 20.8493 6.4667 21.5603C6.4667 22.2713 5.8927 22.8453 5.1817 22.8453ZM18.6077 22.8593C17.8967 22.8593 17.3357 22.2853 17.3357 21.5743C17.3357 20.8633 17.8967 20.3023 18.6077 20.3023C19.3317 20.3023 19.8927 20.8633 19.8927 21.5743C19.8927 22.2853 19.3317 22.8593 18.6077 22.8593ZM5.1817 27.3303C4.4707 27.3303 3.9097 26.7693 3.9097 26.0453C3.9097 25.3343 4.4707 24.7733 5.1817 24.7733C5.8927 24.7733 6.4667 25.3343 6.4667 26.0453C6.4667 26.7693 5.8927 27.3303 5.1817 27.3303ZM18.6077 27.3573C17.8967 27.3573 17.3357 26.7833 17.3357 26.0723C17.3357 25.3613 17.8967 24.7873 18.6077 24.7873C19.3317 24.7873 19.8927 25.3613 19.8927 26.0723C19.8927 26.7833 19.3317 27.3573 18.6077 27.3573Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.66015625 35.806640625"
          className={className}
        >
          <path
            d="              M-0.0003 29.3123C-0.0003 31.4313 1.2307 32.6762 3.3357 32.6762H8.3947C10.4867 32.6762 11.7307 31.4313 11.7307 29.2993V6.4803C11.7307 4.6893 10.8417 3.5132 9.3107 3.1992V1.1483C9.3107 0.5063 8.7907 0.0003 8.1487 0.0003C7.5057 0.0003 6.9997 0.5192 6.9997 1.1483V3.1032H4.7307V1.1483C4.7307 0.5192 4.2107 0.0003 3.5687 0.0003C2.9397 0.0003 2.4337 0.5063 2.4337 1.1483V3.1722C0.8477 3.4593 -0.0003 4.6483 -0.0003 6.4803ZM14.9297 29.3403C14.9297 31.1723 15.7637 32.3473 17.3497 32.6353V34.6583C17.3497 35.3012 17.8557 35.8063 18.4977 35.8063C19.1407 35.8063 19.6597 35.3012 19.6597 34.6723V32.7173H21.9297V34.6723C21.9297 35.3012 22.4357 35.8063 23.0777 35.8063C23.7207 35.8063 24.2267 35.3012 24.2267 34.6583V32.6213C25.7717 32.2933 26.6597 31.1313 26.6597 29.3263V6.5212C26.6597 4.3882 25.4157 3.1313 23.3107 3.1313H18.2657C16.1597 3.1313 14.9297 4.3882 14.9297 6.5083ZM5.8657 9.9673C5.0857 9.9673 4.4707 9.3382 4.4707 8.5583C4.4707 7.7793 5.0857 7.1642 5.8657 7.1642C6.6447 7.1642 7.2737 7.7793 7.2737 8.5583C7.2737 9.3382 6.6447 9.9673 5.8657 9.9673ZM20.7947 9.9943C20.0157 9.9943 19.3867 9.3653 19.3867 8.5863C19.3867 7.8062 20.0157 7.1773 20.7947 7.1773C21.5747 7.1773 22.1897 7.8062 22.1897 8.5863C22.1897 9.3653 21.5747 9.9943 20.7947 9.9943ZM5.8657 14.6293C5.0857 14.6293 4.4707 14.0133 4.4707 13.2203C4.4707 12.4413 5.0857 11.8263 5.8657 11.8263C6.6447 11.8263 7.2737 12.4413 7.2737 13.2203C7.2737 14.0133 6.6447 14.6293 5.8657 14.6293ZM20.7947 14.6563C20.0157 14.6563 19.3867 14.0273 19.3867 13.2483C19.3867 12.4683 20.0157 11.8532 20.7947 11.8532C21.5747 11.8532 22.1897 12.4683 22.1897 13.2483C22.1897 14.0273 21.5747 14.6563 20.7947 14.6563ZM5.8657 19.2912C5.0857 19.2912 4.4707 18.6763 4.4707 17.8963C4.4707 17.1172 5.0857 16.4883 5.8657 16.4883C6.6447 16.4883 7.2737 17.1172 7.2737 17.8963C7.2737 18.6763 6.6447 19.2912 5.8657 19.2912ZM20.7947 19.3183C20.0157 19.3183 19.3867 18.7033 19.3867 17.9243C19.3867 17.1443 20.0157 16.5153 20.7947 16.5153C21.5747 16.5153 22.1897 17.1443 22.1897 17.9243C22.1897 18.7033 21.5747 19.3183 20.7947 19.3183ZM5.8657 23.9673C5.0857 23.9673 4.4707 23.3513 4.4707 22.5723C4.4707 21.7793 5.0857 21.1503 5.8657 21.1503C6.6447 21.1503 7.2737 21.7793 7.2737 22.5723C7.2737 23.3513 6.6447 23.9673 5.8657 23.9673ZM20.7947 23.9943C20.0157 23.9943 19.3867 23.3653 19.3867 22.5863C19.3867 21.8063 20.0157 21.1773 20.7947 21.1773C21.5747 21.1773 22.1897 21.8063 22.1897 22.5863C22.1897 23.3653 21.5747 23.9943 20.7947 23.9943ZM5.8657 28.6293C5.0857 28.6293 4.4707 28.0133 4.4707 27.2343C4.4707 26.4553 5.0857 25.8263 5.8657 25.8263C6.6447 25.8263 7.2737 26.4553 7.2737 27.2343C7.2737 28.0133 6.6447 28.6293 5.8657 28.6293ZM20.7947 28.6563C20.0157 28.6563 19.3867 28.0413 19.3867 27.2483C19.3867 26.4683 20.0157 25.8533 20.7947 25.8533C21.5747 25.8533 22.1897 26.4683 22.1897 27.2483C22.1897 28.0413 21.5747 28.6563 20.7947 28.6563Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.001953125 30.720703125"
          className={className}
        >
          <path
            d="              M-0.0003 26.3869C-0.0003 27.5899 0.7517 28.3149 1.9957 28.3149H6.5767C7.8207 28.3149 8.5727 27.5899 8.5727 26.3869V4.3479C8.5727 3.1309 7.8207 2.4059 6.5767 2.4059H6.4397V0.4649C6.4397 0.2049 6.2347 -0.0001 5.9747 -0.0001C5.7147 -0.0001 5.5097 0.2319 5.5097 0.4509V2.4059H3.0627V0.4509C3.0627 0.2319 2.8577 -0.0001 2.5977 -0.0001C2.3377 -0.0001 2.1327 0.2049 2.1327 0.4649V2.4059H1.9957C0.7517 2.4059 -0.0003 3.1309 -0.0003 4.3339ZM11.4297 26.3869C11.4297 27.6039 12.1817 28.3279 13.4257 28.3279H13.5627V30.2559C13.5627 30.5159 13.7677 30.7209 14.0277 30.7209C14.2867 30.7209 14.4927 30.5019 14.4927 30.2699V28.3279H16.9397V30.2699C16.9397 30.5019 17.1447 30.7209 17.4047 30.7209C17.6637 30.7209 17.8687 30.5159 17.8687 30.2559V28.3279H17.9927C19.2497 28.3279 20.0017 27.6039 20.0017 26.3869V4.3479C20.0017 3.1449 19.2497 2.4059 17.9927 2.4059H13.4257C12.1817 2.4059 11.4297 3.1449 11.4297 4.3479ZM4.2927 7.7249C3.6777 7.7249 3.1857 7.2319 3.1857 6.6309C3.1857 6.0019 3.6777 5.5099 4.2927 5.5099C4.8947 5.5099 5.3867 6.0019 5.3867 6.6309C5.3867 7.2319 4.8947 7.7249 4.2927 7.7249ZM15.7087 7.7379C15.1077 7.7379 14.6157 7.2459 14.6157 6.6449C14.6157 6.0289 15.1077 5.5369 15.7087 5.5369C16.3247 5.5369 16.8167 6.0289 16.8167 6.6449C16.8167 7.2459 16.3247 7.7379 15.7087 7.7379ZM4.2927 12.0859C3.6777 12.0859 3.1857 11.6069 3.1857 10.9919C3.1857 10.3769 3.6777 9.8849 4.2927 9.8849C4.8947 9.8849 5.3867 10.3769 5.3867 10.9919C5.3867 11.6069 4.8947 12.0859 4.2927 12.0859ZM15.7087 12.1269C15.1077 12.1269 14.6157 11.6209 14.6157 11.0059C14.6157 10.4039 15.1077 9.9119 15.7087 9.9119C16.3247 9.9119 16.8167 10.4039 16.8167 11.0059C16.8167 11.6209 16.3247 12.1269 15.7087 12.1269ZM4.2927 16.4339C3.6777 16.4339 3.1857 15.9409 3.1857 15.3399C3.1857 14.7249 3.6777 14.2599 4.2927 14.2599C4.8947 14.2599 5.3867 14.7249 5.3867 15.3399C5.3867 15.9409 4.8947 16.4339 4.2927 16.4339ZM15.7087 16.4749C15.1077 16.4749 14.6157 15.9959 14.6157 15.3949C14.6157 14.7929 15.1077 14.3009 15.7087 14.3009C16.3247 14.3009 16.8167 14.7929 16.8167 15.3949C16.8167 15.9959 16.3247 16.4749 15.7087 16.4749ZM4.2927 20.8219C3.6777 20.8219 3.1857 20.3299 3.1857 19.7289C3.1857 19.1129 3.6777 18.6069 4.2927 18.6069C4.8947 18.6069 5.3867 19.1129 5.3867 19.7289C5.3867 20.3299 4.8947 20.8219 4.2927 20.8219ZM15.7087 20.8359C15.1077 20.8359 14.6157 20.3439 14.6157 19.7419C14.6157 19.1269 15.1077 18.6479 15.7087 18.6479C16.3247 18.6479 16.8167 19.1269 16.8167 19.7419C16.8167 20.3439 16.3247 20.8359 15.7087 20.8359ZM4.2927 25.1969C3.6777 25.1969 3.1857 24.7049 3.1857 24.0899C3.1857 23.4879 3.6777 22.9959 4.2927 22.9959C4.8947 22.9959 5.3867 23.4879 5.3867 24.0899C5.3867 24.7049 4.8947 25.1969 4.2927 25.1969ZM15.7087 25.2109C15.1077 25.2109 14.6157 24.7319 14.6157 24.1039C14.6157 23.5019 15.1077 23.0099 15.7087 23.0099C16.3247 23.0099 16.8167 23.5019 16.8167 24.1039C16.8167 24.7319 16.3247 25.2109 15.7087 25.2109Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.89453125 29.736328125"
          className={className}
        >
          <path
            d="              M-0.0003 25.8261C-0.0003 26.8511 0.6697 27.4941 1.7637 27.4941H6.2887C7.3827 27.4941 8.0527 26.8511 8.0527 25.8261V3.9101C8.0527 2.8851 7.3827 2.2421 6.2887 2.2421H5.9197V0.3421C5.9197 0.1641 5.7697 0.0001 5.5917 0.0001C5.4007 0.0001 5.2497 0.1781 5.2497 0.3281V2.2421H2.8027V0.3281C2.8027 0.1781 2.6527 0.0001 2.4607 0.0001C2.2837 0.0001 2.1327 0.1641 2.1327 0.3421V2.2421H1.7637C0.6697 2.2421 -0.0003 2.8851 -0.0003 3.9101ZM10.8417 25.8261C10.8417 26.8511 11.5117 27.4941 12.6057 27.4941H12.9747V29.3941C12.9747 29.5721 13.1247 29.7361 13.3027 29.7361C13.4937 29.7361 13.6447 29.5591 13.6447 29.4081V27.4941H16.0917V29.4081C16.0917 29.5591 16.2427 29.7361 16.4337 29.7361C16.6117 29.7361 16.7617 29.5721 16.7617 29.3941V27.4941H17.1307C18.2247 27.4941 18.8947 26.8511 18.8947 25.8261V3.9101C18.8947 2.8851 18.2247 2.2421 17.1307 2.2421H12.6057C11.5117 2.2421 10.8417 2.8851 10.8417 3.9101ZM4.0337 7.2461C3.4587 7.2461 2.9807 6.7671 2.9807 6.2071C2.9807 5.6051 3.4587 5.1411 4.0337 5.1411C4.6077 5.1411 5.0727 5.6051 5.0727 6.2071C5.0727 6.7671 4.6077 7.2461 4.0337 7.2461ZM14.8747 7.2601C14.3007 7.2601 13.8227 6.7951 13.8227 6.2211C13.8227 5.6331 14.3007 5.1541 14.8747 5.1541C15.4497 5.1541 15.9137 5.6331 15.9137 6.2211C15.9137 6.7951 15.4497 7.2601 14.8747 7.2601ZM4.0337 11.5661C3.4587 11.5661 2.9807 11.1151 2.9807 10.5271C2.9807 9.9531 3.4587 9.4881 4.0337 9.4881C4.6077 9.4881 5.0727 9.9531 5.0727 10.5271C5.0727 11.1151 4.6077 11.5661 4.0337 11.5661ZM14.8747 11.6211C14.3007 11.6211 13.8227 11.1291 13.8227 10.5411C13.8227 9.9671 14.3007 9.5021 14.8747 9.5021C15.4497 9.5021 15.9137 9.9671 15.9137 10.5411C15.9137 11.1291 15.4497 11.6211 14.8747 11.6211ZM4.0337 15.8731C3.4587 15.8731 2.9807 15.4081 2.9807 14.8341C2.9807 14.2601 3.4587 13.8091 4.0337 13.8091C4.6077 13.8091 5.0727 14.2601 5.0727 14.8341C5.0727 15.4081 4.6077 15.8731 4.0337 15.8731ZM14.8747 15.9281C14.3007 15.9281 13.8227 15.4761 13.8227 14.9021C13.8227 14.3281 14.3007 13.8631 14.8747 13.8631C15.4497 13.8631 15.9137 14.3281 15.9137 14.9021C15.9137 15.4761 15.4497 15.9281 14.8747 15.9281ZM4.0337 20.2341C3.4587 20.2341 2.9807 19.7691 2.9807 19.1951C2.9807 18.6071 3.4587 18.1151 4.0337 18.1151C4.6077 18.1151 5.0727 18.6071 5.0727 19.1951C5.0727 19.7691 4.6077 20.2341 4.0337 20.2341ZM14.8747 20.2481C14.3007 20.2481 13.8227 19.7831 13.8227 19.2091C13.8227 18.6211 14.3007 18.1701 14.8747 18.1701C15.4497 18.1701 15.9137 18.6211 15.9137 19.2091C15.9137 19.7831 15.4497 20.2481 14.8747 20.2481ZM4.0337 24.5821C3.4587 24.5821 2.9807 24.1031 2.9807 23.5161C2.9807 22.9411 3.4587 22.4761 4.0337 22.4761C4.6077 22.4761 5.0727 22.9411 5.0727 23.5161C5.0727 24.1031 4.6077 24.5821 4.0337 24.5821ZM14.8747 24.5961C14.3007 24.5961 13.8227 24.1311 13.8227 23.5291C13.8227 22.9551 14.3007 22.4901 14.8747 22.4901C15.4497 22.4901 15.9137 22.9551 15.9137 23.5291C15.9137 24.1311 15.4497 24.5961 14.8747 24.5961Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
