import { IconProps } from "../../types"

export default function WindshieldFrontAndWiperIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.82685483382696 31.420003147489563"
          className={className}
        >
          <path
            d="              M20.92 22.5744C23.34 22.5744 26.334 23.5174 28.549 24.5294C29.561 24.9944 30.696 24.8984 31.434 23.9824L40.95 11.8824C42.303 10.1744 42.071 8.2184 40.389 6.9064C36.219 3.6114 28.549 1.4514 20.92 1.4514C16.983 1.4514 13.045 2.0254 9.586 3.0374L8.397 0.9864C7.85 0.0294 6.633 -0.2716 5.635 0.2614C4.651 0.8364 4.336 2.0664 4.91 3.0504L5.703 4.4184C4.049 5.1424 2.614 5.9764 1.438 6.9064C-0.244 8.2184 -0.476 10.1744 0.877 11.8824L10.407 23.9824C11.145 24.8984 12.28 24.9944 13.291 24.5294C14.276 24.0784 15.424 23.6404 16.614 23.2854L17.557 24.9254C17.078 25.5954 16.805 26.4164 16.805 27.3044C16.805 29.5884 18.637 31.4204 20.92 31.4204C23.19 31.4204 25.022 29.5884 25.022 27.3044C25.022 25.1444 23.381 23.3814 21.262 23.2164L20.893 22.5744ZM20.92 18.1994C20.141 18.1994 19.307 18.2544 18.473 18.3774L11.924 7.0704C14.713 6.2634 17.762 5.8264 20.92 5.8264C26.813 5.8264 32.364 7.3574 36.493 9.9274C36.67 10.0234 36.684 10.2154 36.561 10.3794L29.219 19.6754C29.069 19.8674 28.918 19.9224 28.7 19.8264C26.334 18.8554 23.368 18.1994 20.92 18.1994ZM12.621 19.6894L5.266 10.3794C5.143 10.2284 5.184 10.0234 5.348 9.9274C6.182 9.3944 7.084 8.9164 8.041 8.4784L14.344 19.3754C13.934 19.5114 13.524 19.6624 13.127 19.8264C12.922 19.9084 12.772 19.8674 12.621 19.6894ZM20.92 28.4944C20.25 28.4944 19.731 27.9744 19.731 27.3044C19.731 26.6484 20.25 26.1294 20.92 26.1294C21.576 26.1294 22.096 26.6484 22.096 27.3044C22.096 27.9744 21.576 28.4944 20.92 28.4944Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.73745017599233 29.758112937003943"
          className={className}
        >
          <path
            d="              M20.3684 21.2948C22.9254 21.2948 26.0014 22.1838 28.2714 23.2908C29.0914 23.6878 30.0074 23.5788 30.5814 22.8538L40.0014 10.8768C41.1364 9.4278 40.9454 7.8288 39.5234 6.7208C35.5304 3.6038 28.0254 1.3888 20.3684 1.3888C16.3494 1.3888 12.3844 1.9908 8.9394 3.0158L7.6404 0.7738C7.2164 0.0358 6.2864 -0.2242 5.4804 0.2128C4.7144 0.6368 4.4954 1.6078 4.9334 2.3598L5.9314 4.0818C4.0854 4.8478 2.4724 5.7368 1.2144 6.7208C-0.2076 7.8288 -0.3986 9.4278 0.7364 10.8768L10.1554 22.8538C10.7304 23.5788 11.6324 23.6878 12.4524 23.2908C13.5874 22.7448 14.9004 22.2518 16.2534 21.8828L17.4844 24.0018C17.0324 24.6038 16.7734 25.3558 16.7734 26.1628C16.7734 28.1448 18.3724 29.7578 20.3684 29.7578C22.3374 29.7578 23.9644 28.1448 23.9644 26.1628C23.9644 24.1798 22.3514 22.5528 20.3684 22.5528C20.3414 22.5528 20.3144 22.5668 20.2734 22.5668L19.5624 21.3228C19.8354 21.3088 20.1094 21.2948 20.3684 21.2948ZM20.3684 18.0138C19.5344 18.0138 18.6594 18.0818 17.7574 18.2188L10.7164 6.0918C13.7384 5.1758 17.0054 4.6698 20.3684 4.6698C26.3984 4.6698 32.1814 6.2698 36.5974 9.0448C36.8704 9.2228 36.8984 9.4688 36.7064 9.7428L28.9954 19.5318C28.7774 19.8048 28.6264 19.8458 28.3394 19.7228C25.7694 18.6698 22.8434 18.0138 20.3684 18.0138ZM11.7554 19.5448L4.0304 9.7428C3.8394 9.4828 3.8804 9.2228 4.1404 9.0448C5.2474 8.3478 6.4504 7.7188 7.7224 7.1718L14.5584 18.9568C13.8204 19.1758 13.0954 19.4358 12.3844 19.7228C12.1114 19.8318 11.9604 19.8048 11.7554 19.5448ZM20.3684 27.3788C19.6854 27.3788 19.1384 26.8458 19.1384 26.1628C19.1384 25.4788 19.6854 24.9178 20.3684 24.9178C21.0384 24.9178 21.5994 25.4788 21.5994 26.1628C21.5994 26.8458 21.0384 27.3788 20.3684 27.3788Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.30835968738807 30.633111650304528"
          className={className}
        >
          <path
            d="              M20.6555 21.9647C23.1445 21.9647 26.1795 22.8807 28.4075 23.9477C29.3375 24.3847 30.3635 24.2757 31.0195 23.4557L40.4935 11.4107C41.7515 9.8247 41.5325 8.0337 39.9745 6.8167C35.8865 3.6177 28.2985 1.4297 20.6555 1.4297C16.6915 1.4297 12.7395 2.0177 9.2805 3.0297L8.0365 0.8827C7.5445 0.0357 6.4645 -0.2513 5.5625 0.2407C4.6735 0.7467 4.4005 1.8537 4.9195 2.7287L5.8085 4.2597C4.0585 4.9987 2.5405 5.8737 1.3235 6.8167C-0.2205 8.0337 -0.4395 9.8247 0.8045 11.4107L10.2795 23.4557C10.9485 24.2757 11.9745 24.3847 12.8905 23.9477C13.9435 23.4557 15.1735 22.9767 16.4455 22.6217L17.5255 24.4947C17.0605 25.1367 16.7865 25.9167 16.7865 26.7637C16.7865 28.9107 18.5095 30.6327 20.6555 30.6327C22.7885 30.6327 24.5255 28.9107 24.5255 26.7637C24.5255 24.6727 22.8705 22.9767 20.7925 22.8947L20.2595 21.9787C20.3965 21.9647 20.5195 21.9647 20.6555 21.9647ZM20.6555 18.1097C19.8495 18.1097 19.0015 18.1777 18.1265 18.3007L11.3455 6.6117C14.2435 5.7507 17.4025 5.2857 20.6555 5.2857C26.6165 5.2857 32.2775 6.8437 36.5425 9.5097C36.7615 9.6467 36.7755 9.8657 36.6245 10.0847L29.1055 19.6137C28.9275 19.8327 28.7775 19.8867 28.5305 19.7777C26.0705 18.7657 23.1165 18.1097 20.6555 18.1097ZM12.2065 19.6277L4.6735 10.0847C4.5235 9.8797 4.5645 9.6467 4.7695 9.5097C5.7395 8.9087 6.7925 8.3477 7.8865 7.8697L14.4355 19.1757C13.8745 19.3537 13.3145 19.5587 12.7805 19.7777C12.5485 19.8737 12.3845 19.8327 12.2065 19.6277ZM20.6555 27.9667C19.9865 27.9667 19.4525 27.4337 19.4525 26.7637C19.4525 26.0937 19.9865 25.5607 20.6555 25.5607C21.3255 25.5607 21.8595 26.0937 21.8595 26.7637C21.8595 27.4337 21.3255 27.9667 20.6555 27.9667Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.10695316804952 27.07417159007337"
          className={className}
        >
          <path
            d="              M19.55 27.0737C21.095 27.0737 22.394 25.7887 22.394 24.2307C22.394 22.6717 21.109 21.3867 19.55 21.3867C19.331 21.3867 19.126 21.4137 18.921 21.4687L17.718 19.4317C18.333 19.3627 18.948 19.3217 19.55 19.3217C22.407 19.3217 25.511 20.1147 27.917 21.3187C28.519 21.6327 29.175 21.5097 29.585 20.9897L38.609 9.4237C39.388 8.4257 39.238 7.3597 38.267 6.6077C34.343 3.6537 26.974 1.4117 19.55 1.4117C15.558 1.4117 11.579 2.0547 8.134 3.1207L6.548 0.4277C6.329 0.0447 5.851 -0.1333 5.372 0.1127C4.935 0.3317 4.839 0.8787 5.072 1.2757L6.493 3.6817C4.251 4.5017 2.31 5.5137 0.847 6.6077C-0.137 7.3597 -0.274 8.4257 0.491 9.4237L9.529 20.9897C9.925 21.5097 10.595 21.6327 11.197 21.3187C12.591 20.6207 14.232 20.0607 15.913 19.7187L17.458 22.3297C16.993 22.8357 16.72 23.5057 16.72 24.2307C16.72 25.8027 17.978 27.0737 19.55 27.0737ZM19.55 17.6407C18.661 17.6407 17.732 17.7087 16.802 17.8597L9.077 4.7207C12.372 3.6677 15.982 3.0937 19.55 3.0937C25.812 3.0937 32.156 4.8577 36.79 7.8517C37.159 8.0977 37.214 8.4527 36.941 8.8087L28.779 19.2677C28.491 19.6097 28.327 19.6097 27.986 19.4867C25.183 18.3237 22.216 17.6407 19.55 17.6407ZM10.335 19.2677L2.173 8.8087C1.9 8.4527 1.954 8.0977 2.323 7.8517C3.855 6.8537 5.591 5.9917 7.437 5.2947L15.025 18.2147C13.726 18.5157 12.4 18.9527 11.115 19.4867C10.786 19.6097 10.609 19.6097 10.335 19.2677ZM19.55 25.6387C18.771 25.6387 18.142 25.0097 18.142 24.2307C18.142 23.4507 18.771 22.8087 19.55 22.8087C20.316 22.8087 20.972 23.4647 20.972 24.2307C20.972 25.0097 20.329 25.6387 19.55 25.6387Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.03599799496436 28.7014824404128"
          className={className}
        >
          <path
            d="              M20.0147 20.4851C22.6667 20.4851 25.7837 21.3191 28.1087 22.5081C28.7917 22.8641 29.5717 22.7401 30.0357 22.1391L39.3877 10.2441C40.3857 8.9591 40.2217 7.5921 38.9637 6.6081C35.0807 3.6001 27.6977 1.3441 20.0147 1.3441C15.9537 1.3441 11.9617 1.9731 8.5437 3.0261L7.1497 0.6331C6.8077 0.0451 6.0697 -0.1869 5.3997 0.1681C4.7567 0.5101 4.5927 1.3031 4.9477 1.9181L6.0967 3.8731C4.1007 4.6661 2.3777 5.5961 1.0657 6.6081C-0.1783 7.5921 -0.3563 8.9591 0.6557 10.2441L9.9927 22.1391C10.4577 22.7401 11.2377 22.8641 11.9347 22.5081C13.1377 21.8931 14.5727 21.3601 16.0497 21.0041L17.4447 23.4101C17.0067 23.9711 16.7467 24.6681 16.7467 25.4341C16.7467 27.2251 18.2097 28.7011 20.0147 28.7011C21.8057 28.7011 23.2817 27.2251 23.2817 25.4341C23.2817 23.6291 21.8057 22.1531 20.0147 22.1531C19.9057 22.1531 19.7817 22.1661 19.6727 22.1801L18.7297 20.5531C19.1667 20.5121 19.5907 20.4851 20.0147 20.4851ZM20.0147 17.8871C19.1537 17.8871 18.2507 17.9691 17.3077 18.1191L9.9657 5.4731C13.1107 4.4751 16.5417 3.9421 20.0147 3.9421C26.1257 3.9421 32.0597 5.5821 36.6667 8.4811C36.9947 8.7131 37.0357 9.0001 36.7897 9.3281L28.8467 19.4461C28.6007 19.7601 28.4367 19.7871 28.1217 19.6641C25.4017 18.5431 22.5027 17.8871 20.0147 17.8871ZM11.1967 19.4461L3.2397 9.3281C2.9927 9.0001 3.0337 8.7131 3.3757 8.4811C4.6607 7.6741 6.0557 6.9631 7.5317 6.3481L14.7097 18.6941C13.7667 18.9671 12.8367 19.2811 11.9207 19.6641C11.5927 19.7871 11.4427 19.7601 11.1967 19.4461ZM20.0147 26.6781C19.3177 26.6781 18.7567 26.1171 18.7567 25.4341C18.7567 24.7371 19.3177 24.1621 20.0147 24.1621C20.6977 24.1621 21.2857 24.7371 21.2857 25.4341C21.2857 26.1171 20.6977 26.6781 20.0147 26.6781Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.64558556644723 28.094787140636132"
          className={className}
        >
          <path
            d="              M19.8279 20.0288C22.5219 20.0288 25.6659 20.8348 28.0039 22.0658C28.6329 22.3938 29.3299 22.2708 29.7409 21.7378L39.0509 9.8698C39.9669 8.6948 39.8169 7.4498 38.6549 6.5478C34.8399 3.5948 27.5259 1.3118 19.8279 1.3118C15.7269 1.3118 11.7349 1.9678 8.3169 3.0208L6.8809 0.5458C6.5939 0.0398 5.9649 -0.1652 5.3499 0.1498C4.7889 0.4228 4.6659 1.1338 4.9669 1.6538L6.1839 3.7448C4.1199 4.5518 2.3419 5.5088 0.9889 6.5478C-0.1731 7.4498 -0.3241 8.6948 0.6059 9.8698L9.9159 21.7378C10.3269 22.2708 11.0099 22.3938 11.6389 22.0658C12.8969 21.4088 14.4009 20.8628 15.9319 20.5068L17.4219 23.0768C16.9979 23.6108 16.7519 24.2808 16.7519 25.0188C16.7519 26.7138 18.1199 28.0948 19.8279 28.0948C21.4959 28.0948 22.9049 26.6998 22.9049 25.0188C22.9049 23.3098 21.5099 21.9288 19.8279 21.9288C19.6639 21.9288 19.4999 21.9428 19.3359 21.9558L18.2559 20.1108C18.7889 20.0558 19.3229 20.0288 19.8279 20.0288ZM19.8279 17.8268C18.9529 17.8268 18.0239 17.9088 17.0669 18.0598L9.5339 5.1128C12.7739 4.0728 16.2739 3.5128 19.8279 3.5128C25.9809 3.5128 32.0099 5.1948 36.7129 8.1608C37.0819 8.4208 37.1229 8.7358 36.8499 9.0908L28.7699 19.3858C28.4959 19.7278 28.3459 19.7548 28.0039 19.6178C25.2149 18.4838 22.3169 17.8268 19.8279 17.8268ZM10.8869 19.3858L2.7929 9.0908C2.5339 8.7358 2.5749 8.4208 2.9439 8.1608C4.3379 7.2858 5.8419 6.5208 7.4279 5.8778L14.7969 18.5518C13.7449 18.8388 12.6919 19.1948 11.6529 19.6178C11.3109 19.7548 11.1609 19.7278 10.8869 19.3858ZM19.8279 26.2768C19.1179 26.2768 18.5569 25.7018 18.5569 25.0188C18.5569 24.3078 19.1179 23.7198 19.8279 23.7198C20.5119 23.7198 21.1139 24.3078 21.1139 25.0188C21.1139 25.7018 20.5119 26.2768 19.8279 26.2768Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.34018418249523 29.1555768064932"
          className={className}
        >
          <path
            d="              M20.1642 20.8427C22.7762 20.8427 25.8792 21.6907 28.1762 22.8527C28.9282 23.2217 29.7622 23.1127 30.2682 22.4567L39.6472 10.5207C40.7132 9.1677 40.5352 7.7047 39.2092 6.6657C35.2722 3.6027 27.8482 1.3607 20.1642 1.3607C16.1172 1.3607 12.1392 1.9897 8.7072 3.0287L7.3542 0.6907C6.9852 0.0347 6.1642 -0.1983 5.4402 0.1847C4.7422 0.5677 4.5512 1.4427 4.9472 2.0987L6.0282 3.9587C4.0862 4.7377 2.4182 5.6537 1.1332 6.6657C-0.1928 7.7047 -0.3708 9.1677 0.6822 10.5207L10.0612 22.4567C10.5802 23.1127 11.4142 23.2217 12.1532 22.8527C13.3282 22.2647 14.7232 21.7457 16.1312 21.3897L17.4572 23.6727C17.0202 24.2477 16.7602 24.9717 16.7602 25.7517C16.7602 27.6247 18.2782 29.1557 20.1642 29.1557C22.0372 29.1557 23.5692 27.6247 23.5692 25.7517C23.5692 23.8647 22.0372 22.3337 20.1642 22.3337C20.0822 22.3337 20.0142 22.3337 19.9322 22.3337L19.0842 20.8837C19.4532 20.8567 19.8092 20.8427 20.1642 20.8427ZM20.1642 17.9447C19.3172 17.9447 18.4282 18.0267 17.5122 18.1637L10.2932 5.7357C13.3832 4.7787 16.7462 4.2587 20.1642 4.2587C26.2352 4.2587 32.1142 5.8857 36.6392 8.7297C36.9402 8.9347 36.9812 9.2087 36.7622 9.5087L28.9012 19.4897C28.6682 19.7767 28.5182 19.8177 28.2172 19.6947C25.5652 18.6007 22.6532 17.9447 20.1642 17.9447ZM11.4282 19.4897L3.5802 9.5087C3.3622 9.2087 3.4032 8.9347 3.7032 8.7297C4.9202 7.9637 6.2332 7.2937 7.6142 6.7067L14.6412 18.8057C13.7932 19.0517 12.9462 19.3527 12.1252 19.6947C11.8242 19.8037 11.6602 19.7767 11.4282 19.4897ZM20.1642 26.9817C19.4812 26.9817 18.9202 26.4347 18.9202 25.7517C18.9202 25.0537 19.4812 24.4937 20.1642 24.4937C20.8482 24.4937 21.4222 25.0537 21.4222 25.7517C21.4222 26.4347 20.8482 26.9817 20.1642 26.9817Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.40417158420243 25.711845392470757"
          className={className}
        >
          <path
            d="              M19.2087 25.7117C20.5757 25.7117 21.7107 24.5767 21.7107 23.2097C21.7107 21.8287 20.5757 20.6947 19.2087 20.6947C18.9217 20.6947 18.6487 20.7357 18.3887 20.8307L17.0077 18.5337C17.7327 18.4517 18.4707 18.4107 19.2087 18.4107C22.2577 18.4107 25.2927 19.1497 27.7817 20.3387C28.3557 20.6127 28.9847 20.5167 29.3807 20.0247L38.0487 8.8137C38.6227 8.0617 38.4867 7.2407 37.7477 6.6947C33.7147 3.7407 26.2497 1.5267 19.2087 1.5267C15.3537 1.5267 11.3747 2.1827 7.9157 3.2627L6.1117 0.2687C5.9887 0.0497 5.7007 -0.0873 5.4007 0.0637C5.1267 0.2137 5.0857 0.5417 5.2227 0.7607L6.9047 3.5907C4.4437 4.4517 2.2697 5.5047 0.6567 6.6947C-0.0823 7.2407 -0.2183 8.0617 0.3557 8.8137L9.0237 20.0247C9.4197 20.5167 10.0487 20.6127 10.6227 20.3387C12.2087 19.5867 14.0137 18.9987 15.9137 18.6847L17.4997 21.3637C17.0077 21.8157 16.6937 22.4717 16.6937 23.2097C16.6937 24.5907 17.8147 25.7117 19.2087 25.7117ZM19.2087 17.3857C18.2927 17.3857 17.3767 17.4537 16.4607 17.5907L8.4627 4.2057C11.8537 3.1397 15.5857 2.5377 19.2087 2.5377C25.5937 2.5377 32.3747 4.4247 36.9007 7.4187C37.2697 7.6787 37.3377 8.0617 37.0647 8.4307L28.7927 19.0947C28.5057 19.4637 28.3147 19.4227 27.9867 19.2997C25.1567 18.1237 22.0937 17.3857 19.2087 17.3857ZM9.6117 19.0947L1.3397 8.4307C1.0667 8.0617 1.1347 7.6787 1.5037 7.4187C3.2127 6.2837 5.2497 5.3137 7.4647 4.5337L15.3667 17.7817C13.6987 18.1107 12.0177 18.6297 10.4177 19.2997C10.0897 19.4227 9.8987 19.4637 9.6117 19.0947ZM19.2087 24.8097C18.3207 24.8097 17.5957 24.0847 17.5957 23.2097C17.5957 22.3217 18.3207 21.5967 19.2087 21.5967C20.0707 21.5967 20.8087 22.3347 20.8087 23.2097C20.8087 24.0847 20.0837 24.8097 19.2087 24.8097Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.04230289075604 25.015473698451753"
          className={className}
        >
          <path
            d="              M19.0184 25.0158C20.3034 25.0158 21.3694 23.9628 21.3694 22.6778C21.3694 21.3928 20.3034 20.3258 19.0184 20.3258C18.7034 20.3258 18.4034 20.3948 18.1164 20.5178L16.6534 18.0698C17.4324 17.9748 18.2254 17.9338 19.0184 17.9338C22.1904 17.9338 25.1844 18.6578 27.7274 19.8338C28.2744 20.0938 28.8894 20.0118 29.2724 19.5198L37.7484 8.4998C38.2414 7.8708 38.0904 7.1878 37.4754 6.7358C33.3874 3.7828 25.8814 1.5958 19.0184 1.5958C15.2444 1.5958 11.2804 2.2518 7.7934 3.3458L5.8934 0.1878C5.8114 0.0508 5.6334 -0.0722 5.4144 0.0508C5.2234 0.1468 5.2094 0.3648 5.2914 0.5018L7.1234 3.5508C4.5534 4.4118 2.2564 5.5058 0.5614 6.7358C-0.0536 7.1878 -0.1906 7.8708 0.2874 8.4998L8.7784 19.5198C9.1604 20.0118 9.7624 20.0938 10.3234 19.8338C12.0044 19.0548 13.9054 18.4668 15.9144 18.1658L17.5414 20.8728C17.0224 21.2968 16.6804 21.9528 16.6804 22.6778C16.6804 23.9768 17.7194 25.0158 19.0184 25.0158ZM19.0184 17.2638C18.1164 17.2638 17.1994 17.3318 16.2834 17.4548L8.1624 3.9468C11.5804 2.8668 15.3954 2.2658 19.0184 2.2658C25.4854 2.2658 32.4854 4.2068 36.9694 7.2008C37.3244 7.4608 37.4074 7.8708 37.1194 8.2398L28.8074 19.0138C28.5064 19.3828 28.3014 19.3278 27.9874 19.2048C25.1434 18.0158 22.0394 17.2638 19.0184 17.2638ZM9.2294 19.0138L0.9164 8.2398C0.6434 7.8708 0.7114 7.4608 1.0804 7.2008C2.8714 5.9978 5.0864 4.9588 7.4924 4.1518L15.5594 17.5778C13.6724 17.8928 11.8134 18.4668 10.0494 19.2048C9.7354 19.3278 9.5304 19.3828 9.2294 19.0138ZM19.0184 24.3728C18.0884 24.3728 17.3234 23.6068 17.3234 22.6778C17.3234 21.7478 18.0884 20.9688 19.0184 20.9688C19.9344 20.9688 20.7274 21.7618 20.7274 22.6778C20.7274 23.6068 19.9484 24.3728 19.0184 24.3728Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
