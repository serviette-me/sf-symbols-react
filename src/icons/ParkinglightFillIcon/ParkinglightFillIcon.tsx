import { IconProps } from "../../types"

export default function ParkinglightFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 58.720703125 24.77310720251417"
          className={className}
        >
          <path
            d="              M5.7967 6.259C6.7817 6.833 8.0527 6.546 8.6677 5.494C9.2697 4.482 8.9007 3.21 7.9027 2.636L3.8417 0.298C2.8027 -0.317 1.5997 0.052 1.0117 1.105C0.4097 2.089 0.7387 3.333 1.7637 3.921ZM52.9237 6.259L56.9567 3.921C57.9827 3.333 58.3107 2.089 57.7087 1.105C57.1207 0.052 55.9177 -0.317 54.8787 0.298L50.8187 2.636C49.8207 3.21 49.4507 4.482 50.0527 5.494C50.6677 6.546 51.9397 6.833 52.9237 6.259ZM28.4647 12.398C28.4647 6.998 22.8867 2.568 17.3357 2.568H17.2267C14.1917 2.568 12.5237 3.703 11.7167 6.396C11.2797 8.064 11.0197 9.964 11.0197 12.398C11.0197 14.818 11.2797 16.732 11.7167 18.4C12.5237 21.08 14.1917 22.228 17.2267 22.228H17.3357C22.8867 22.228 28.4647 17.798 28.4647 12.398ZM30.2557 12.398C30.2557 17.798 35.8337 22.228 41.3847 22.228H41.4937C44.5297 22.228 46.1977 21.08 47.0037 18.4C47.4417 16.732 47.7007 14.818 47.7007 12.398C47.7007 9.964 47.4417 8.064 47.0037 6.396C46.1977 3.703 44.5297 2.568 41.4937 2.568H41.3847C35.8337 2.568 30.2557 6.998 30.2557 12.398ZM6.7127 10.279H2.0647C0.8617 10.279 -0.0003 11.181 -0.0003 12.384C-0.0003 13.574 0.8617 14.476 2.0647 14.476H6.7127C7.9027 14.476 8.8317 13.574 8.8317 12.384C8.8317 11.181 7.9027 10.279 6.7127 10.279ZM52.0077 10.279C50.8187 10.279 49.8887 11.181 49.8887 12.384C49.8887 13.574 50.8187 14.476 52.0077 14.476H56.6567C57.8597 14.476 58.7207 13.574 58.7207 12.384C58.7207 11.181 57.8597 10.279 56.6567 10.279ZM5.7967 18.509L1.7637 20.833C0.7247 21.435 0.4097 22.665 1.0117 23.677C1.5997 24.716 2.8027 25.085 3.8417 24.484L7.9027 22.146C8.9007 21.572 9.2697 20.3 8.6677 19.289C8.0527 18.222 6.7817 17.935 5.7967 18.509ZM52.9237 18.509C51.9397 17.935 50.6677 18.222 50.0527 19.289C49.4507 20.3 49.8207 21.572 50.8187 22.146L54.8787 24.484C55.9177 25.085 57.1207 24.716 57.7087 23.677C58.3107 22.665 57.9957 21.435 56.9567 20.833Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 51.0234375 22.036691897185868"
          className={className}
        >
          <path
            d="              M5.1677 5.0849C5.9197 5.5219 6.8497 5.3029 7.3007 4.5099C7.7517 3.7579 7.4917 2.8009 6.7407 2.3779L3.0077 0.2169C2.2287 -0.2341 1.3257 0.0399 0.8887 0.8329C0.4377 1.5709 0.6837 2.4869 1.4487 2.9239ZM45.8557 5.0849L49.5607 2.9239C50.3397 2.4869 50.5727 1.5709 50.1207 0.8329C49.6837 0.0399 48.7817 -0.2341 48.0157 0.2169L44.2827 2.3779C43.5317 2.8009 43.2717 3.7579 43.7087 4.5099C44.1597 5.3029 45.1037 5.5219 45.8557 5.0849ZM24.5407 11.0319C24.5407 6.3559 19.6597 2.2549 14.7657 2.2549H14.4917C11.9907 2.2549 10.7047 3.1979 10.0347 5.5359C9.6527 7.0669 9.4477 8.7899 9.4477 11.0319C9.4477 13.2599 9.6527 14.9969 10.0347 16.5279C10.7047 18.8659 11.9907 19.8089 14.4917 19.8089H14.7657C19.6597 19.8089 24.5407 15.7079 24.5407 11.0319ZM26.4687 11.0319C26.4687 15.7079 31.3637 19.8089 36.2577 19.8089H36.5177C39.0327 19.8089 40.3187 18.8659 40.9747 16.5279C41.3577 14.9969 41.5757 13.2599 41.5757 11.0319C41.5757 8.7899 41.3577 7.0669 40.9747 5.5359C40.3187 3.1979 39.0327 2.2549 36.5177 2.2549H36.2577C31.3637 2.2549 26.4687 6.3559 26.4687 11.0319ZM5.8237 9.4599H1.5447C0.6427 9.4599 -0.0003 10.1299 -0.0003 11.0179C-0.0003 11.9069 0.6427 12.5769 1.5447 12.5769H5.8237C6.7127 12.5769 7.3967 11.9069 7.3967 11.0179C7.3967 10.1299 6.7127 9.4599 5.8237 9.4599ZM45.1857 9.4599C44.2967 9.4599 43.6137 10.1299 43.6137 11.0179C43.6137 11.9069 44.2967 12.5769 45.1857 12.5769H49.4787C50.3807 12.5769 51.0237 11.9069 51.0237 11.0179C51.0237 10.1299 50.3807 9.4599 49.4787 9.4599ZM45.8557 16.9649C45.1037 16.5279 44.1597 16.7469 43.7087 17.5399C43.2717 18.2919 43.5317 19.2349 44.2827 19.6729L48.0157 21.8189C48.7817 22.2699 49.6837 21.9969 50.1207 21.2169C50.5727 20.4649 50.3397 19.5629 49.5607 19.1119ZM5.1677 16.9649L1.4487 19.1119C0.6697 19.5629 0.4377 20.4649 0.8887 21.2169C1.3257 21.9969 2.2287 22.2699 3.0077 21.8189L6.7407 19.6729C7.4917 19.2349 7.7517 18.2919 7.3007 17.5399C6.8497 16.7469 5.9197 16.5279 5.1677 16.9649Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 55.083984375 23.481412174197658"
          className={className}
        >
          <path
            d="              M49.5877 5.7115L53.4707 3.4555C54.3727 2.9365 54.6597 1.8425 54.1267 0.9675C53.6077 0.0515 52.5547 -0.2765 51.6387 0.2565L47.7287 2.5125C46.8537 3.0185 46.5257 4.1395 47.0587 5.0275C47.5917 5.9575 48.7127 6.2175 49.5877 5.7115ZM5.4957 5.7115C6.3707 6.2175 7.4917 5.9575 8.0257 5.0275C8.5587 4.1395 8.2307 3.0185 7.3557 2.5125L3.4457 0.2565C2.5427 -0.2765 1.4767 0.0515 0.9567 0.9675C0.4237 1.8425 0.7107 2.9365 1.6137 3.4555ZM26.6187 11.7545C26.6187 6.6955 21.3557 2.4165 16.1187 2.4165H15.9417C13.1527 2.4165 11.6617 3.4695 10.9237 5.9845C10.5137 7.5985 10.2817 9.4165 10.2817 11.7545C10.2817 14.0925 10.5137 15.9105 10.9237 17.5235C11.6617 20.0395 13.1527 21.0785 15.9417 21.0785H16.1187C21.3557 21.0785 26.6187 16.8125 26.6187 11.7545ZM28.4647 11.7545C28.4647 16.8125 33.7287 21.0785 38.9647 21.0785H39.1427C41.9317 21.0785 43.4217 20.0395 44.1597 17.5235C44.5707 15.9105 44.8167 14.0925 44.8167 11.7545C44.8167 9.4165 44.5707 7.5985 44.1597 5.9845C43.4217 3.4695 41.9317 2.4165 39.1427 2.4165H38.9647C33.7287 2.4165 28.4647 6.6955 28.4647 11.7545ZM6.2887 9.8955H1.8187C0.7517 9.8955 -0.0003 10.6875 -0.0003 11.7405C-0.0003 12.7795 0.7517 13.5865 1.8187 13.5865H6.2887C7.3417 13.5865 8.1617 12.7795 8.1617 11.7405C8.1617 10.6875 7.3417 9.8955 6.2887 9.8955ZM48.7947 9.8955C47.7417 9.8955 46.9357 10.6875 46.9357 11.7405C46.9357 12.7795 47.7417 13.5865 48.7947 13.5865H53.2657C54.3317 13.5865 55.0837 12.7795 55.0837 11.7405C55.0837 10.6875 54.3317 9.8955 53.2657 9.8955ZM49.5877 17.7835C48.7127 17.2775 47.5917 17.5235 47.0587 18.4675C46.5257 19.3425 46.8537 20.4635 47.7287 20.9825L51.6387 23.2255C52.5547 23.7585 53.6077 23.4305 54.1267 22.5145C54.6597 21.6255 54.3867 20.5595 53.4707 20.0255ZM5.4957 17.7835L1.6137 20.0255C0.6977 20.5595 0.4237 21.6255 0.9567 22.5145C1.4767 23.4305 2.5427 23.7585 3.4457 23.2255L7.3557 20.9825C8.2307 20.4635 8.5587 19.3425 8.0257 18.4675C7.4917 17.5235 6.3707 17.2775 5.4957 17.7835Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.876953125 18.65123646671738"
          className={className}
        >
          <path
            d="              M37.4197 3.4535L40.8237 1.4985C41.2207 1.2655 41.3437 0.8015 41.1117 0.4185C40.8927 0.0215 40.4137 -0.1145 40.0317 0.1035L36.6267 2.0725C36.2307 2.3055 36.1077 2.7835 36.3397 3.1665C36.5587 3.5625 37.0367 3.6855 37.4197 3.4535ZM4.4437 3.4535C4.8397 3.6855 5.3047 3.5625 5.5367 3.1665C5.7697 2.7835 5.6327 2.3055 5.2497 2.0725L1.8317 0.1035C1.4487 -0.1145 0.9847 0.0215 0.7657 0.4185C0.5327 0.8015 0.6567 1.2655 1.0387 1.4985ZM19.9607 9.3325C19.9607 5.4765 15.8457 1.9635 11.7307 1.9635H11.4157C9.4067 1.9635 8.5997 2.6055 8.0937 4.4785C7.7517 5.8325 7.5737 7.3365 7.5737 9.3325C7.5737 11.3285 7.7517 12.8325 8.0937 14.1855C8.5997 16.0585 9.4067 16.6875 11.4157 16.6875H11.7307C15.8457 16.6875 19.9607 13.1875 19.9607 9.3325ZM21.9157 9.3325C21.9157 13.1875 26.0177 16.6875 30.1467 16.6875H30.4607C32.4567 16.6875 33.2637 16.0585 33.7827 14.1855C34.1117 12.8325 34.2887 11.3285 34.2887 9.3325C34.2887 7.3365 34.1117 5.8325 33.7827 4.4785C33.2637 2.6055 32.4567 1.9635 30.4607 1.9635H30.1467C26.0177 1.9635 21.9157 5.4765 21.9157 9.3325ZM4.7167 8.5255H0.7927C0.3417 8.5255 -0.0003 8.8675 -0.0003 9.3185C-0.0003 9.7695 0.3417 10.1255 0.7927 10.1255H4.7167C5.1677 10.1255 5.5237 9.7695 5.5237 9.3185C5.5237 8.8675 5.1677 8.5255 4.7167 8.5255ZM37.1467 8.5255C36.6957 8.5255 36.3537 8.8675 36.3537 9.3185C36.3537 9.7695 36.6957 10.1255 37.1467 10.1255H41.0837C41.5347 10.1255 41.8767 9.7695 41.8767 9.3185C41.8767 8.8675 41.5347 8.5255 41.0837 8.5255ZM37.4197 15.1975C37.0367 14.9655 36.5587 15.0885 36.3397 15.4845C36.1077 15.8675 36.2307 16.3465 36.6267 16.5785L40.0317 18.5475C40.4137 18.7655 40.8927 18.6295 41.1117 18.2325C41.3437 17.8495 41.2207 17.3855 40.8237 17.1525ZM4.4437 15.1975L1.0387 17.1525C0.6567 17.3855 0.5327 17.8495 0.7657 18.2325C0.9847 18.6295 1.4487 18.7655 1.8317 18.5475L5.2497 16.5785C5.6327 16.3465 5.7697 15.8675 5.5367 15.4845C5.3047 15.0885 4.8397 14.9655 4.4437 15.1975Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 46.087890625 20.282649948076447"
          className={className}
        >
          <path
            d="              M41.3167 4.3133L44.8297 2.2903C45.4457 1.9343 45.6227 1.2233 45.2677 0.6493C44.9257 0.0343 44.2287 -0.1847 43.6267 0.1703L40.0997 2.2083C39.4977 2.5493 39.3067 3.2883 39.6617 3.8623C40.0037 4.4913 40.7287 4.6683 41.3167 4.3133ZM4.7717 4.3133C5.3597 4.6683 6.0837 4.4913 6.4397 3.8623C6.7817 3.2883 6.5897 2.5493 6.0017 2.2083L2.4607 0.1703C1.8727 -0.1847 1.1617 0.0343 0.8207 0.6493C0.4647 1.2233 0.6427 1.9343 1.2577 2.2903ZM22.0387 10.1513C22.0387 5.9403 17.5817 2.0573 13.1117 2.0573H12.7557C10.5817 2.0573 9.5427 2.8643 8.9687 4.9833C8.6267 6.4323 8.4357 8.0323 8.4357 10.1513C8.4357 12.2563 8.6267 13.8703 8.9687 15.3193C9.5427 17.4243 10.5817 18.2453 12.7557 18.2453H13.1117C17.5817 18.2453 22.0387 14.3483 22.0387 10.1513ZM24.0487 10.1513C24.0487 14.3483 28.5057 18.2453 32.9767 18.2453H33.3317C35.5197 18.2453 36.5587 17.4243 37.1187 15.3193C37.4607 13.8703 37.6657 12.2563 37.6657 10.1513C37.6657 8.0323 37.4607 6.4323 37.1187 4.9833C36.5587 2.8643 35.5197 2.0573 33.3317 2.0573H32.9767C28.5057 2.0573 24.0487 5.9403 24.0487 10.1513ZM5.2637 8.9203H1.2027C0.5057 8.9203 -0.0003 9.4403 -0.0003 10.1373C-0.0003 10.8343 0.5057 11.3543 1.2027 11.3543H5.2637C5.9607 11.3543 6.4937 10.8343 6.4937 10.1373C6.4937 9.4403 5.9607 8.9203 5.2637 8.9203ZM40.8237 8.9203C40.1267 8.9203 39.5937 9.4403 39.5937 10.1373C39.5937 10.8343 40.1267 11.3543 40.8237 11.3543H44.8847C45.5817 11.3543 46.0877 10.8343 46.0877 10.1373C46.0877 9.4403 45.5817 8.9203 44.8847 8.9203ZM41.3167 15.9613C40.7287 15.6203 40.0037 15.7973 39.6617 16.4133C39.3067 17.0013 39.4977 17.7393 40.0997 18.0813L43.6267 20.1183C44.2287 20.4603 44.9257 20.2543 45.2677 19.6393C45.6227 19.0513 45.4457 18.3403 44.8297 17.9993ZM4.7717 15.9613L1.2577 17.9993C0.6427 18.3403 0.4647 19.0513 0.8207 19.6393C1.1617 20.2543 1.8727 20.4603 2.4607 20.1183L6.0017 18.0813C6.5897 17.7393 6.7817 17.0013 6.4397 16.4133C6.0837 15.7973 5.3597 15.6203 4.7717 15.9613Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 43.3125 19.300312651599068"
          className={className}
        >
          <path
            d="              M38.7737 3.8916L42.1777 1.9236C42.6837 1.6366 42.8337 1.0346 42.5467 0.5556C42.2457 0.0226 41.6577 -0.1554 41.1527 0.1456L37.7347 2.1146C37.2417 2.4016 37.0777 3.0306 37.3787 3.5096C37.6657 4.0426 38.2677 4.1926 38.7737 3.8916ZM4.5387 3.8916C5.0447 4.1926 5.6467 4.0426 5.9477 3.5096C6.2477 3.0306 6.0837 2.4016 5.5777 2.1146L2.1597 0.1456C1.6677 -0.1554 1.0667 0.0226 0.7797 0.5556C0.4787 1.0346 0.6287 1.6366 1.1487 1.9236ZM20.6167 9.6616C20.6167 5.7236 16.4197 1.9366 12.1817 1.9366H11.7717C9.7887 1.9366 8.8867 2.6886 8.3667 4.6846C8.0387 6.0656 7.8617 7.6106 7.8617 9.6616C7.8617 11.6986 8.0387 13.2436 8.3667 14.6516C8.8867 16.6346 9.7887 17.3726 11.7717 17.3726H12.1817C16.4197 17.3726 20.6167 13.5986 20.6167 9.6616ZM22.6957 9.6616C22.6957 13.5986 26.8927 17.3726 31.1447 17.3726H31.5407C33.5367 17.3726 34.4397 16.6346 34.9587 14.6516C35.2737 13.2436 35.4507 11.6986 35.4507 9.6616C35.4507 7.6106 35.2737 6.0656 34.9587 4.6846C34.4397 2.6886 33.5367 1.9366 31.5407 1.9366H31.1447C26.8927 1.9366 22.6957 5.7236 22.6957 9.6616ZM4.9487 8.6226H1.0117C0.4237 8.6226 -0.0003 9.0596 -0.0003 9.6476C-0.0003 10.2356 0.4237 10.6736 1.0117 10.6736H4.9487C5.5367 10.6736 5.9747 10.2356 5.9747 9.6476C5.9747 9.0596 5.5367 8.6226 4.9487 8.6226ZM38.3767 8.6226C37.7887 8.6226 37.3377 9.0596 37.3377 9.6476C37.3377 10.2356 37.7887 10.6736 38.3767 10.6736H42.3007C42.8887 10.6736 43.3127 10.2356 43.3127 9.6476C43.3127 9.0596 42.8887 8.6226 42.3007 8.6226ZM4.5387 15.4036L1.1487 17.3726C0.6287 17.6736 0.4787 18.2616 0.7797 18.7536C1.0667 19.2726 1.6677 19.4506 2.1597 19.1636L5.5777 17.1946C6.0837 16.8936 6.2477 16.2786 5.9477 15.7866C5.6467 15.2666 5.0447 15.1166 4.5387 15.4036ZM38.7737 15.4036C38.2677 15.1166 37.6657 15.2666 37.3787 15.7866C37.0777 16.2786 37.2417 16.8936 37.7347 17.1946L41.1527 19.1636C41.6577 19.4506 42.2457 19.2726 42.5467 18.7536C42.8337 18.2616 42.6837 17.6736 42.1777 17.3726Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48.220703125 21.04115114613482"
          className={className}
        >
          <path
            d="              M43.2717 4.65L46.8807 2.558C47.5507 2.175 47.7557 1.369 47.3727 0.726C46.9767 0.029 46.1837 -0.204 45.5137 0.193L41.9047 2.271C41.2347 2.654 41.0157 3.488 41.4117 4.144C41.7947 4.841 42.6157 5.033 43.2717 4.65ZM4.9357 4.65C5.6057 5.033 6.4117 4.841 6.8087 4.144C7.2047 3.488 6.9727 2.654 6.3167 2.271L2.6937 0.193C2.0237 -0.204 1.2307 0.029 0.8477 0.726C0.4507 1.369 0.6697 2.175 1.3397 2.558ZM23.1187 10.529C23.1187 6.127 18.4847 2.134 13.8227 2.134H13.5077C11.1837 2.134 10.0347 3.009 9.4337 5.224C9.0647 6.701 8.8727 8.355 8.8727 10.529C8.8727 12.689 9.0647 14.357 9.4337 15.834C10.0347 18.048 11.1837 18.923 13.5077 18.923H13.8227C18.4847 18.923 23.1187 14.931 23.1187 10.529ZM25.1017 10.529C25.1017 14.931 29.7367 18.923 34.3987 18.923H34.7127C37.0237 18.923 38.1717 18.048 38.7867 15.834C39.1427 14.357 39.3477 12.689 39.3477 10.529C39.3477 8.355 39.1427 6.701 38.7867 5.224C38.1717 3.009 37.0237 2.134 34.7127 2.134H34.3987C29.7367 2.134 25.1017 6.127 25.1017 10.529ZM5.5097 9.148H1.3537C0.5607 9.148 -0.0003 9.736 -0.0003 10.515C-0.0003 11.295 0.5607 11.882 1.3537 11.882H5.5097C6.2887 11.882 6.8907 11.295 6.8907 10.515C6.8907 9.736 6.2887 9.148 5.5097 9.148ZM42.7107 9.148C41.9317 9.148 41.3297 9.736 41.3297 10.515C41.3297 11.295 41.9317 11.882 42.7107 11.882H46.8667C47.6467 11.882 48.2207 11.295 48.2207 10.515C48.2207 9.736 47.6467 9.148 46.8667 9.148ZM43.2717 16.394C42.6157 16.011 41.7947 16.203 41.4117 16.9C41.0157 17.556 41.2347 18.377 41.9047 18.759L45.5137 20.851C46.1837 21.248 46.9767 21.002 47.3727 20.318C47.7557 19.662 47.5507 18.869 46.8807 18.472ZM4.9357 16.394L1.3397 18.472C0.6567 18.869 0.4507 19.662 0.8477 20.318C1.2307 21.002 2.0237 21.248 2.6937 20.851L6.3167 18.759C6.9727 18.377 7.2047 17.556 6.8087 16.9C6.4117 16.203 5.6057 16.011 4.9357 16.394Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.94921875 17.801021190528896"
          className={className}
        >
          <path
            d="              M35.6427 2.8737L39.0327 0.9187C39.2657 0.7947 39.3617 0.4807 39.2107 0.2487C39.0877 0.0157 38.7737 -0.0663 38.5547 0.0567L35.1507 2.0257C34.9047 2.1627 34.8227 2.4627 34.9727 2.7097C35.0957 2.9417 35.3967 3.0237 35.6427 2.8737ZM4.3207 2.8737C4.5667 3.0237 4.8537 2.9417 4.9907 2.7097C5.1267 2.4627 5.0587 2.1627 4.8127 2.0257L1.4077 0.0567C1.1757 -0.0663 0.8747 0.0157 0.7387 0.2487C0.6017 0.4807 0.6837 0.7947 0.9157 0.9187ZM19.0727 8.9027C19.0727 5.1697 15.0797 2.0117 11.1287 2.0117H10.9237C8.9277 2.0117 8.2307 2.5037 7.7247 4.2127C7.3827 5.5257 7.1917 6.9607 7.1917 8.9027C7.1917 10.8437 7.3827 12.2797 7.7247 13.5917C8.2307 15.3007 8.9277 15.7937 10.9237 15.7937H11.1287C15.0797 15.7937 19.0727 12.6347 19.0727 8.9027ZM20.8907 8.9027C20.8907 12.6347 24.8687 15.7937 28.8207 15.7937H29.0257C31.0347 15.7937 31.7187 15.3007 32.2247 13.5917C32.5667 12.2797 32.7577 10.8437 32.7577 8.9027C32.7577 6.9607 32.5667 5.5257 32.2247 4.2127C31.7187 2.5037 31.0347 2.0117 29.0257 2.0117H28.8207C24.8687 2.0117 20.8907 5.1697 20.8907 8.9027ZM4.4157 8.4107H0.4917C0.2187 8.4107 -0.0003 8.6157 -0.0003 8.9027C-0.0003 9.1757 0.2187 9.3947 0.4917 9.3947H4.4157C4.6897 9.3947 4.9077 9.1757 4.9077 8.9027C4.9077 8.6157 4.6897 8.4107 4.4157 8.4107ZM35.5327 8.4107C35.2597 8.4107 35.0407 8.6157 35.0407 8.9027C35.0407 9.1757 35.2597 9.3947 35.5327 9.3947H39.4707C39.7437 9.3947 39.9487 9.1757 39.9487 8.9027C39.9487 8.6157 39.7437 8.4107 39.4707 8.4107ZM4.3207 14.9187L0.9157 16.8737C0.6837 17.0097 0.6017 17.3107 0.7387 17.5567C0.8747 17.7897 1.1757 17.8717 1.4077 17.7347L4.8127 15.7797C5.0587 15.6287 5.1267 15.3417 4.9907 15.0957C4.8537 14.8637 4.5667 14.7677 4.3207 14.9187ZM35.6427 14.9187C35.3967 14.7677 35.0957 14.8637 34.9727 15.0957C34.8227 15.3417 34.9047 15.6287 35.1507 15.7797L38.5547 17.7347C38.7737 17.8717 39.0877 17.7897 39.2107 17.5567C39.3617 17.3107 39.2657 17.0097 39.0327 16.8737Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.978515625 17.357895871093735"
          className={className}
        >
          <path
            d="              M34.7267 2.5813L38.1307 0.6263C38.2817 0.5443 38.3497 0.3253 38.2407 0.1483C38.1577 0.0113 37.9397 -0.0437 37.7887 0.0383L34.3847 1.9933C34.2207 2.0893 34.1657 2.2943 34.2757 2.4583C34.3577 2.6093 34.5487 2.6773 34.7267 2.5813ZM4.2517 2.5813C4.4157 2.6773 4.6207 2.6093 4.7027 2.4583C4.8127 2.2943 4.7577 2.0893 4.5937 1.9933L1.1897 0.0383C1.0387 -0.0437 0.8207 0.0113 0.7387 0.1483C0.6287 0.3253 0.6977 0.5443 0.8477 0.6263ZM18.6207 8.6793C18.6207 5.0013 14.6977 2.0343 10.8277 2.0343H10.6777C8.6677 2.0343 8.0527 2.4453 7.5467 4.0713C7.1917 5.3703 6.9997 6.7653 6.9997 8.6793C6.9997 10.5933 7.1917 11.9873 7.5467 13.2733C8.0527 14.9133 8.6677 15.3233 10.6777 15.3233H10.8277C14.6977 15.3233 18.6207 12.3573 18.6207 8.6793ZM20.3577 8.6793C20.3577 12.3573 24.2817 15.3233 28.1507 15.3233H28.3007C30.3107 15.3233 30.9257 14.9133 31.4317 13.2733C31.7867 11.9873 31.9787 10.5933 31.9787 8.6793C31.9787 6.7653 31.7867 5.3703 31.4317 4.0713C30.9257 2.4453 30.3107 2.0343 28.3007 2.0343H28.1507C24.2817 2.0343 20.3577 5.0013 20.3577 8.6793ZM4.2657 8.3373H0.3417C0.1507 8.3373 -0.0003 8.4873 -0.0003 8.6793C-0.0003 8.8573 0.1507 9.0073 0.3417 9.0073H4.2657C4.4437 9.0073 4.5937 8.8573 4.5937 8.6793C4.5937 8.4873 4.4437 8.3373 4.2657 8.3373ZM34.7127 8.3373C34.5217 8.3373 34.3707 8.4873 34.3707 8.6793C34.3707 8.8573 34.5217 9.0073 34.7127 9.0073H38.6367C38.8277 9.0073 38.9787 8.8573 38.9787 8.6793C38.9787 8.4873 38.8277 8.3373 38.6367 8.3373ZM4.2517 14.7773L0.8477 16.7323C0.6977 16.8143 0.6287 17.0323 0.7387 17.1963C0.8207 17.3473 1.0387 17.4023 1.1897 17.3203L4.5937 15.3643C4.7577 15.2553 4.8127 15.0643 4.7027 14.8863C4.6207 14.7363 4.4157 14.6673 4.2517 14.7773ZM34.7267 14.7773C34.5487 14.6673 34.3577 14.7363 34.2757 14.8863C34.1657 15.0643 34.2207 15.2553 34.3847 15.3643L37.7887 17.3203C37.9397 17.4023 38.1577 17.3473 38.2407 17.1963C38.3497 17.0323 38.2817 16.8143 38.1307 16.7323Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}