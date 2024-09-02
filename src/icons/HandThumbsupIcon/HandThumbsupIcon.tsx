import { IconProps } from "../../types"

export default function HandThumbsupIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.9765625 34.521484375"
          className={className}
        >
          <path
            d="              M0.0004 22.969C0.0004 28.697 3.5274 33.154 8.8864 33.154H13.3164C15.2984 34.057 17.5134 34.521 19.8104 34.521H21.7794C23.8574 34.521 25.5394 34.385 26.5784 34.098C29.0524 33.51 30.7074 31.568 30.7074 29.313C30.7074 29.107 30.6794 28.916 30.6254 28.725C31.5684 27.822 32.0874 26.619 32.0874 25.307C32.0874 24.801 32.0054 24.322 31.8554 23.912C32.4704 23.105 32.7984 22.107 32.7984 21.027C32.7984 20.344 32.6624 19.715 32.4164 19.154C32.7854 18.43 32.9764 17.555 32.9764 16.598C32.9764 13.85 30.9944 11.84 28.2734 11.84H23.5704C23.4614 11.84 23.3654 11.771 23.4204 11.607C23.8024 10.5 25.5524 7.437 25.5524 4.662C25.5524 1.996 23.6114 0 21.0134 0C19.1544 0 17.8004 0.998 16.6664 3.172C14.8204 6.781 12.3734 9.844 10.1444 12.701H8.3534C3.2674 12.701 0.0004 17.131 0.0004 22.969ZM10.8414 22.695C10.8414 20.029 11.4294 18.32 13.2614 15.846C15.3674 13.016 18.3204 9.543 20.4394 5.291C20.5484 5.086 20.6584 5.004 20.8364 5.004C21.0544 5.004 21.1644 5.182 21.1644 5.4C21.1644 6.645 18.9084 10.158 18.9084 12.674C18.9084 14.738 20.4254 16.229 22.9004 16.229H27.9594C28.3284 16.229 28.5874 16.475 28.5874 16.803C28.5874 17.021 28.5054 17.186 28.3144 17.418C27.4944 18.279 27.3714 19.77 28.1364 20.508C28.3004 20.713 28.3824 20.877 28.3824 21.055C28.3824 21.246 28.2594 21.424 28.0274 21.588C27.0564 22.244 26.7964 23.57 27.3024 24.65C27.4124 24.869 27.4664 25.047 27.4664 25.211C27.4664 25.539 27.2614 25.812 26.9204 26.018C25.9494 26.578 25.6484 27.918 26.0454 28.889C26.1134 29.053 26.1404 29.135 26.1274 29.244C26.1274 29.504 25.9214 29.736 25.3474 29.859C24.5824 30.037 23.2694 30.146 21.0414 30.133L19.8514 30.119C14.4644 30.064 10.8414 27.139 10.8414 22.695ZM4.1974 22.969C4.1974 19.783 5.4684 17.432 7.2594 16.98C7.3554 16.967 7.4644 16.953 7.5604 16.926C6.7954 18.73 6.4394 20.604 6.4394 22.859C6.4394 25.17 7.1234 27.344 8.4354 29.244C8.3804 29.244 8.2444 29.23 8.1344 29.217C5.8514 28.752 4.1974 26.305 4.1974 22.969Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.40625 32.12890625"
          className={className}
        >
          <path
            d="              M-0.0003 21.547C-0.0003 26.633 3.1987 30.707 7.6287 30.707H12.0177C13.8767 31.623 16.0367 32.129 18.3617 32.129H20.2617C22.1207 32.129 23.6657 32.006 24.6637 31.746C26.8107 31.227 28.2187 29.613 28.2187 27.686C28.2187 27.412 28.1777 27.166 28.1097 26.92C29.0257 26.127 29.5447 25.033 29.5447 23.83C29.5447 23.311 29.4487 22.805 29.2847 22.381C29.9007 21.67 30.2287 20.699 30.2287 19.688C30.2287 19.031 30.0917 18.389 29.8317 17.869C30.2007 17.254 30.4067 16.434 30.4067 15.559C30.4067 13.207 28.6427 11.416 26.3047 11.416H21.4507C21.2457 11.416 21.0957 11.32 21.1367 11.102C21.3277 9.83 23.3107 6.631 23.3107 3.91C23.3107 1.654 21.7107 0 19.5237 0C17.9507 0 16.8297 0.834 15.8317 2.734C14.1097 6.084 11.9217 8.996 9.2557 12.318H7.1097C2.9397 12.318 -0.0003 16.379 -0.0003 21.547ZM9.2557 21.383C9.2557 18.621 9.8707 16.857 11.6897 14.424C13.7267 11.676 16.5837 8.354 18.6207 4.266C18.9357 3.664 19.1407 3.514 19.4687 3.514C19.8657 3.514 20.1117 3.801 20.1117 4.279C20.1117 5.975 17.8557 9.338 17.8557 11.635C17.8557 13.412 19.2367 14.615 21.2597 14.615H26.1407C26.7557 14.615 27.1937 15.066 27.1937 15.668C27.1937 16.078 27.0567 16.365 26.7007 16.748C26.1817 17.281 26.0997 18.17 26.5777 18.662C26.8787 19.086 27.0157 19.346 27.0157 19.701C27.0157 20.111 26.7967 20.467 26.3867 20.768C25.7307 21.219 25.5387 22.066 25.8947 22.805C26.1137 23.215 26.2227 23.461 26.2227 23.775C26.2227 24.295 25.8947 24.691 25.2517 25.047C24.6097 25.402 24.4177 26.209 24.6777 26.838C24.8827 27.316 24.9097 27.426 24.9097 27.658C24.9097 28.096 24.5817 28.465 23.8167 28.643C23.0367 28.834 21.7657 28.93 19.8927 28.93L18.4567 28.916C12.9477 28.889 9.2557 25.826 9.2557 21.383ZM3.1037 21.547C3.1037 18.266 4.6487 15.695 6.5627 15.477C6.8087 15.463 7.0547 15.463 7.3007 15.449C6.4397 17.268 6.0427 19.168 6.0427 21.438C6.0427 23.816 6.8227 25.977 8.2717 27.74C7.9567 27.74 7.5877 27.727 7.2457 27.727C4.9487 27.494 3.1037 24.883 3.1037 21.547Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.7734375 33.373046875"
          className={className}
        >
          <path
            d="              M0.0004 22.2855C0.0004 27.7125 3.3774 31.9925 8.2984 31.9925H12.7014C14.6424 32.8945 16.8304 33.3735 19.1274 33.3735H21.0684C23.0504 33.3735 24.6644 33.2505 25.6754 32.9905C28.0004 32.4165 29.5314 30.6385 29.5314 28.5335C29.5314 28.3005 29.5044 28.0825 29.4494 27.8635C30.3794 27.0155 30.8984 25.8675 30.8984 24.5955C30.8984 24.0895 30.8024 23.5975 30.6524 23.1735C31.2674 22.4215 31.5954 21.4375 31.5954 20.3985C31.5954 19.7145 31.4594 19.0855 31.1994 18.5395C31.5684 17.8695 31.7734 17.0215 31.7734 16.0915C31.7734 13.5355 29.9004 11.6345 27.3434 11.6345H22.5724C22.4214 11.6345 22.2984 11.5525 22.3534 11.3615C22.6404 10.1715 24.5004 7.0545 24.5004 4.2925C24.5004 1.8325 22.7224 0.0005 20.3164 0.0005C18.5934 0.0005 17.3494 0.9165 16.2834 2.9665C14.4924 6.4395 12.1684 9.4335 9.7344 12.5095H7.7654C3.1174 12.5095 0.0004 16.7755 0.0004 22.2855ZM10.1034 22.0665C10.1034 19.3595 10.7054 17.6235 12.5234 15.1625C14.6014 12.3735 17.5004 8.9685 19.5914 4.7985C19.7964 4.4025 19.9474 4.2925 20.2074 4.2925C20.4944 4.2925 20.6714 4.5255 20.6714 4.8535C20.6714 6.3165 18.4164 9.7615 18.4164 12.1675C18.4164 14.1095 19.8794 15.4625 22.1344 15.4625H27.1114C27.5894 15.4625 27.9454 15.8045 27.9454 16.2555C27.9454 16.5705 27.8364 16.8025 27.5624 17.0895C26.8794 17.8005 26.7834 19.0035 27.4124 19.6325C27.6304 19.9335 27.7404 20.1525 27.7404 20.3985C27.7404 20.6995 27.5764 20.9585 27.2614 21.1915C26.4414 21.7515 26.2094 22.8455 26.6464 23.7615C26.8104 24.0765 26.8794 24.2815 26.8794 24.5275C26.8794 24.9515 26.6194 25.2795 26.1404 25.5525C25.3344 26.0175 25.0744 27.0975 25.4024 27.9045C25.5394 28.2185 25.5664 28.3145 25.5524 28.4785C25.5524 28.8345 25.2934 29.1215 24.6364 29.2855C23.8574 29.4625 22.5724 29.5725 20.5074 29.5585L19.1954 29.5445C13.7544 29.5035 10.1034 26.5095 10.1034 22.0665ZM3.6914 22.2855C3.6914 19.0585 5.0864 16.5975 6.9314 16.2555C7.0954 16.2425 7.2734 16.2425 7.4514 16.2285C6.6304 18.0335 6.2614 19.9195 6.2614 22.1755C6.2614 24.5275 6.9864 26.6875 8.3674 28.5335C8.1894 28.5335 7.9434 28.5195 7.7244 28.5055C5.4274 28.1505 3.6914 25.6215 3.6914 22.2855Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.263671875 28.13671875"
          className={className}
        >
          <path
            d="              M-0.0003 19.113C-0.0003 23.338 2.7617 26.797 6.0297 26.797H10.1987C11.8257 27.645 13.7947 28.137 15.9957 28.137H17.7457C19.3317 28.137 20.6717 28.055 21.5607 27.822C23.2007 27.412 24.2267 26.291 24.2267 24.855C24.2267 24.486 24.1577 24.172 24.0487 23.857C24.9377 23.242 25.4567 22.326 25.4567 21.273C25.4567 20.727 25.3337 20.18 25.1157 19.77C25.7307 19.236 26.0997 18.361 26.0997 17.432C26.0997 16.803 25.9217 16.146 25.6347 15.723C26.0317 15.244 26.2637 14.52 26.2637 13.74C26.2637 11.977 24.8827 10.582 23.1187 10.582H18.4027C17.8967 10.582 17.5957 10.35 17.5957 9.953C17.5957 8.518 19.7557 5.305 19.7557 2.789C19.7557 1.162 18.6207 0 17.0627 0C15.9137 0 15.1487 0.602 14.3687 2.092C12.7827 5.141 11.1837 7.355 7.9847 11.361H5.5507C2.5017 11.361 -0.0003 14.793 -0.0003 19.113ZM6.9587 19.086C6.9587 16.297 7.5877 14.533 9.3237 12.209C11.2387 9.639 13.8767 6.59 15.7777 2.803C16.2827 1.818 16.5977 1.572 17.1167 1.572C17.7597 1.572 18.1837 2.023 18.1837 2.789C18.1837 4.881 16.0237 8.012 16.0237 9.953C16.0237 11.307 17.1307 12.154 18.5937 12.154H23.1187C24.0077 12.154 24.6917 12.838 24.6917 13.74C24.6917 14.355 24.4997 14.766 24.0627 15.189C23.7757 15.436 23.7477 15.75 23.9937 16.023C24.3497 16.502 24.5277 16.912 24.5277 17.432C24.5277 18.061 24.2267 18.594 23.6937 18.99C23.3517 19.223 23.2147 19.564 23.4337 19.975C23.7207 20.48 23.8847 20.795 23.8847 21.273C23.8847 21.971 23.4477 22.531 22.5727 22.969C22.2577 23.133 22.1617 23.393 22.3257 23.707C22.5997 24.35 22.6547 24.527 22.6547 24.855C22.6547 25.539 22.1617 26.059 21.1917 26.305C20.4397 26.496 19.2227 26.578 17.7457 26.578H16.0917C10.6367 26.578 6.9587 23.447 6.9587 19.086ZM1.5727 19.113C1.5727 15.654 3.4587 12.934 5.5507 12.934H6.9457C5.8377 14.834 5.3867 16.693 5.3867 19.059C5.3867 21.533 6.3577 23.666 8.0797 25.225H6.0297C3.6637 25.225 1.5727 22.477 1.5727 19.113Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.765625 30.583984375"
          className={className}
        >
          <path
            d="              M-0.0003 20.6444C-0.0003 25.3064 2.9937 29.1484 6.8227 29.1484H11.1977C12.9747 30.0644 15.1077 30.5844 17.4457 30.5844H19.2907C21.0277 30.5844 22.4907 30.4884 23.4477 30.2424C25.4027 29.7634 26.6327 28.3694 26.6327 26.6464C26.6327 26.3324 26.5917 26.0454 26.5097 25.7714C27.4117 25.0464 27.9317 24.0074 27.9317 22.8734C27.9317 22.3394 27.8227 21.8204 27.6447 21.3964C28.2597 20.7404 28.6017 19.8104 28.6017 18.8264C28.6017 18.1974 28.4507 17.5414 28.1917 17.0484C28.5467 16.4884 28.7657 15.7094 28.7657 14.8884C28.7657 12.7834 27.1527 11.1424 25.0467 11.1424H20.1117C19.8377 11.1424 19.6597 11.0194 19.6737 10.7734C19.7417 9.4064 21.8887 6.1114 21.8887 3.4184C21.8887 1.4354 20.4937 0.0004 18.5797 0.0004C17.1857 0.0004 16.2147 0.7244 15.3127 2.4614C13.6717 5.6324 11.6487 8.4494 8.6957 12.0724H6.3167C2.7347 12.0724 -0.0003 15.8864 -0.0003 20.6444ZM8.2577 20.5354C8.2577 17.7184 8.8867 15.9144 10.6777 13.5074C12.6877 10.8284 15.4767 7.6014 17.4727 3.6094C17.9097 2.7484 18.1837 2.5564 18.6077 2.5564C19.1137 2.5564 19.4417 2.9124 19.4417 3.5544C19.4417 5.5374 17.1987 8.8184 17.1987 10.9644C17.1987 12.5644 18.4847 13.5894 20.2207 13.5894H24.9787C25.7437 13.5894 26.3187 14.1644 26.3187 14.9294C26.3187 15.4904 26.1407 15.8454 25.6897 16.3104C25.3337 16.6384 25.2927 17.1304 25.5937 17.4724C25.9767 18.0334 26.1407 18.3754 26.1407 18.8264C26.1407 19.3734 25.8807 19.8384 25.3477 20.2484C24.8967 20.5624 24.7457 21.0824 24.9917 21.6154C25.2927 22.1624 25.4297 22.4354 25.4297 22.8454C25.4297 23.4884 25.0197 23.9664 24.1857 24.4184C23.7617 24.6504 23.6527 25.1014 23.8297 25.5114C24.1037 26.2094 24.1447 26.3324 24.1447 26.6324C24.1447 27.1934 23.7207 27.6444 22.8317 27.8634C22.0667 28.0684 20.8087 28.1504 19.1677 28.1504H17.5817C11.9907 28.1364 8.2577 24.9784 8.2577 20.5354ZM2.4067 20.6444C2.4067 17.2814 4.1427 14.5884 6.1247 14.5054C6.4667 14.5054 6.8087 14.5054 7.1507 14.4924C6.2207 16.3384 5.8107 18.2384 5.8107 20.5354C5.8107 22.9554 6.6447 25.0884 8.1757 26.7694C7.6837 26.7694 7.1917 26.7694 6.6857 26.7694C4.3747 26.6874 2.4067 23.9664 2.4067 20.6444Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.849609375 29.72265625"
          className={className}
        >
          <path
            d="              M-0.0003 20.1389C-0.0003 24.5549 2.8847 28.2739 6.3707 28.2739H10.7327C12.4687 29.1899 14.5737 29.7229 16.9257 29.7229H18.7577C20.3987 29.7229 21.8207 29.6269 22.7637 29.3949C24.5957 28.9429 25.7437 27.6719 25.7437 26.0589C25.7437 25.7169 25.6897 25.4159 25.6077 25.1149C26.5097 24.4319 27.0157 23.4339 27.0157 22.3399C27.0157 21.8069 26.9067 21.2739 26.7147 20.8499C27.3297 20.2209 27.6717 19.3049 27.6717 18.3479C27.6717 17.7329 27.5217 17.0759 27.2617 16.5979C27.6307 16.0649 27.8497 15.3129 27.8497 14.5199C27.8497 12.5509 26.3047 10.9919 24.3357 10.9919H19.3457C19.0447 10.9919 18.8537 10.8559 18.8537 10.5959C18.8537 9.1739 21.0957 5.8379 21.0957 3.1579C21.0957 1.3129 19.8107 -0.0001 18.0467 -0.0001C16.7477 -0.0001 15.8727 0.6699 15.0117 2.3109C13.4117 5.3869 11.4977 8.1489 8.3807 11.9489H5.8787C2.6247 11.9489 -0.0003 15.6269 -0.0003 20.1389ZM7.6977 20.0699C7.6977 17.2129 8.3397 15.3949 10.1167 13.0019C12.0997 10.3499 14.8477 7.1779 16.8297 3.2399C17.3227 2.2419 17.6507 2.0239 18.1287 2.0239C18.6897 2.0239 19.0727 2.4199 19.0727 3.1579C19.0727 5.2909 16.8297 8.5179 16.8297 10.5959C16.8297 12.0999 18.0607 13.0159 19.6327 13.0159H24.3357C25.1837 13.0159 25.8257 13.6579 25.8257 14.5199C25.8257 15.1489 25.6207 15.5449 25.1157 16.0649C24.8687 16.2829 24.8417 16.5569 25.0467 16.8159C25.4707 17.4449 25.6487 17.8279 25.6487 18.3479C25.6487 18.9629 25.3617 19.4959 24.7597 19.9469C24.4317 20.2069 24.2947 20.5489 24.4867 20.9589C24.8277 21.5739 24.9917 21.8609 24.9917 22.3399C24.9917 23.0369 24.5407 23.5699 23.5837 24.0629C23.2827 24.2399 23.2147 24.4859 23.3377 24.7739C23.6657 25.5939 23.7067 25.7169 23.7067 26.0589C23.7067 26.6879 23.2417 27.1929 22.2847 27.4399C21.5057 27.6309 20.2617 27.7129 18.7717 27.7129H17.0757C11.4437 27.7129 7.6977 24.5139 7.6977 20.0699ZM2.0237 20.1389C2.0237 16.7339 3.8557 13.9729 5.8787 13.9729H7.0687C6.0977 15.8049 5.6737 17.7189 5.6737 20.0289C5.6737 22.4769 6.5487 24.6089 8.1207 26.2359H6.3707C4.0607 26.2359 2.0237 23.4469 2.0237 20.1389Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.4765625 31.25390625"
          className={className}
        >
          <path
            d="              M-0.0003 21.0415C-0.0003 25.8805 3.0757 29.8325 7.1637 29.8325H11.5527C13.3707 30.7485 15.5037 31.2535 17.8417 31.2535H19.7147C21.4917 31.2535 22.9957 31.1445 23.9807 30.8985C26.0037 30.4065 27.3167 28.9165 27.3167 27.0975C27.3167 26.8105 27.2757 26.5375 27.1937 26.2775C28.1097 25.5255 28.6287 24.4585 28.6287 23.2965C28.6287 22.7635 28.5327 22.2575 28.3417 21.8205C28.9567 21.1505 29.2987 20.2075 29.2987 19.2085C29.2987 18.5665 29.1487 17.9235 28.9027 17.4175C29.2577 16.8305 29.4767 16.0375 29.4767 15.1895C29.4767 12.9745 27.7947 11.2655 25.5797 11.2655H20.6857C20.4527 11.2655 20.2757 11.1565 20.3027 10.9235C20.4257 9.5975 22.5037 6.3575 22.5037 3.6365C22.5037 1.5445 21.0137 0.0005 18.9907 0.0005C17.5137 0.0005 16.4887 0.7795 15.5447 2.5975C13.8637 5.8375 11.7717 8.6955 8.9417 12.1955H6.6577C2.8297 12.1955 -0.0003 16.1055 -0.0003 21.0415ZM8.6957 20.9045C8.6957 18.1155 9.3107 16.3375 11.1157 13.9175C13.1387 11.2105 15.9547 7.9435 17.9647 3.8965C18.3477 3.1585 18.5937 2.9805 18.9907 2.9805C19.4277 2.9805 19.7287 3.3085 19.7287 3.8695C19.7287 5.7285 17.4867 9.0505 17.4867 11.2655C17.4867 12.9475 18.8127 14.0415 20.6717 14.0415H25.4847C26.1817 14.0415 26.7007 14.5605 26.7007 15.2575C26.7007 15.7505 26.5367 16.0785 26.1267 16.5015C25.7027 16.9255 25.6487 17.5955 26.0177 17.9925C26.3597 18.4845 26.5237 18.7985 26.5237 19.2225C26.5237 19.7015 26.2777 20.1115 25.7987 20.4805C25.2657 20.8635 25.0877 21.5195 25.3887 22.1345C25.6487 22.6265 25.7717 22.8865 25.7717 23.2555C25.7717 23.8435 25.4027 24.2945 24.6367 24.6915C24.1307 24.9925 23.9807 25.5935 24.1987 26.0855C24.4457 26.7015 24.4727 26.8105 24.4727 27.0845C24.4727 27.5895 24.0897 28.0005 23.2557 28.2185C22.4767 28.4105 21.2187 28.4925 19.4827 28.4925H17.9507C12.4007 28.4785 8.6957 25.3615 8.6957 20.9045ZM2.7067 21.0415C2.7067 17.7185 4.3617 15.0805 6.3167 14.9295C6.6037 14.9295 6.9177 14.9165 7.2187 14.9165C6.3167 16.7485 5.9067 18.6485 5.9067 20.9315C5.9067 23.3375 6.7267 25.4845 8.2167 27.1935C7.8067 27.1935 7.3557 27.1935 6.9317 27.1935C4.6207 27.0425 2.7067 24.3635 2.7067 21.0415Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.158203125 26.044921875"
          className={className}
        >
          <path
            d="              M-0.0003 17.76C-0.0003 21.725 2.5977 24.855 5.5917 24.855H9.4887C10.9647 25.594 12.7557 26.045 14.7517 26.045H16.4067C17.9237 26.045 19.1407 25.963 19.9607 25.758C21.3557 25.389 22.2307 24.486 22.2307 23.256C22.2307 22.859 22.1347 22.518 21.9847 22.176C22.8727 21.684 23.3927 20.836 23.3927 19.879C23.3927 19.277 23.2417 18.73 22.9827 18.348C23.6117 17.937 24.0077 17.103 24.0077 16.215C24.0077 15.572 23.8027 14.916 23.4887 14.561C23.9117 14.15 24.1577 13.48 24.1577 12.715C24.1577 11.225 22.9957 10.049 21.5197 10.049H17.1447C16.3787 10.049 15.9277 9.68 15.9277 9.119C15.9277 7.629 17.9917 4.621 17.9917 2.297C17.9917 0.957 17.0627 0 15.7637 0C14.7927 0 14.1777 0.506 13.5077 1.791C11.9627 4.812 10.7597 6.303 7.4507 10.582H5.1267C2.3377 10.582 -0.0003 13.699 -0.0003 17.76ZM5.9887 17.787C5.9887 15.094 6.5897 13.385 8.2717 11.143C10.1037 8.695 12.5777 5.824 14.3967 2.242C14.8887 1.258 15.2167 0.971 15.7777 0.971C16.5297 0.971 17.0077 1.49 17.0077 2.297C17.0077 4.334 14.9567 7.314 14.9567 9.119C14.9567 10.281 15.8867 11.02 17.2127 11.02H21.5197C22.4627 11.02 23.1877 11.758 23.1877 12.715C23.1877 13.303 23.0237 13.727 22.6817 14.027C22.3397 14.314 22.2847 14.684 22.5997 14.971C22.8597 15.244 23.0237 15.682 23.0237 16.215C23.0237 16.844 22.7227 17.418 22.2717 17.705C21.9297 17.924 21.7927 18.252 22.0387 18.676C22.2717 19.018 22.4217 19.387 22.4217 19.879C22.4217 20.576 21.9977 21.15 21.2187 21.506C20.9177 21.67 20.7817 21.943 20.9997 22.299C21.2047 22.695 21.2457 22.941 21.2457 23.256C21.2457 23.994 20.7267 24.568 19.7287 24.814C19.0037 24.992 17.8557 25.074 16.4067 25.074H14.7797C9.5567 25.074 5.9887 22.039 5.9887 17.787ZM0.9847 17.76C0.9847 14.232 2.9527 11.566 5.1267 11.566H6.7817C5.5097 13.535 5.0037 15.326 5.0037 17.773C5.0037 20.289 6.0977 22.436 8.0117 23.871H5.5917C3.1447 23.871 0.9847 21.178 0.9847 17.76Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.091796875 24.978515625"
          className={className}
        >
          <path
            d="              M-0.0003 17.0622C-0.0003 20.8902 2.5017 23.8572 5.3597 23.8572H9.1327C10.5277 24.5552 12.2227 24.9782 14.1227 24.9782H15.7227C17.1987 24.9782 18.3617 24.9102 19.1407 24.6912C20.4117 24.3492 21.2047 23.5562 21.2047 22.4492C21.2047 22.0252 21.0957 21.6702 20.9317 21.3282C21.8207 20.8772 22.3397 20.0842 22.3397 19.1542C22.3397 18.5392 22.1757 17.9782 21.9027 17.6232C22.5317 17.2812 22.9277 16.4612 22.9277 15.5862C22.9277 14.9432 22.7227 14.3012 22.3807 13.9722C22.8187 13.6032 23.0917 12.9472 23.0917 12.1952C23.0917 10.8422 22.0257 9.7752 20.6987 9.7752H16.5017C15.6137 9.7752 15.0797 9.3512 15.0797 8.6952C15.0797 7.1912 17.0757 4.2652 17.0757 2.0642C17.0757 0.8472 16.2557 0.0002 15.0937 0.0002C14.2327 0.0002 13.6717 0.4652 13.0707 1.6402C11.5387 4.6482 10.5407 5.7692 7.1917 10.1992H4.9077C2.2557 10.1992 -0.0003 13.1522 -0.0003 17.0622ZM5.4957 17.1172C5.4957 14.4922 6.0837 12.7972 7.7387 10.5962C9.5157 8.2172 11.9217 5.4282 13.6987 1.9552C14.1777 0.9712 14.5197 0.6702 15.0937 0.6702C15.9007 0.6702 16.4067 1.2172 16.4067 2.0642C16.4067 4.0602 14.4097 6.9722 14.4097 8.6952C14.4097 9.7482 15.2577 10.4452 16.5017 10.4452H20.6987C21.6567 10.4452 22.4077 11.2112 22.4077 12.1952C22.4077 12.7692 22.2577 13.2072 21.9707 13.4392C21.6017 13.7402 21.5467 14.1502 21.8887 14.4372C22.1077 14.6012 22.2577 15.0662 22.2577 15.5862C22.2577 16.2282 21.9567 16.8162 21.5467 17.0492C21.1917 17.2542 21.0547 17.5962 21.3147 18.0062C21.5197 18.2792 21.6697 18.6622 21.6697 19.1542C21.6697 19.8512 21.2597 20.4532 20.5347 20.7542C20.2207 20.9182 20.0837 21.1912 20.3027 21.5882C20.4807 21.8472 20.5347 22.1352 20.5347 22.4492C20.5347 23.2152 19.9887 23.8162 18.9767 24.0622C18.2797 24.2262 17.1447 24.2952 15.7227 24.2952H14.1097C9.0097 24.2952 5.4957 21.3142 5.4957 17.1172ZM0.6697 17.0622C0.6697 13.5082 2.6797 10.8692 4.9077 10.8692H6.6987C5.3457 12.8792 4.8127 14.6422 4.8127 17.1172C4.8127 19.6462 5.9747 21.7932 7.9707 23.1872H5.3597C2.8707 23.1872 0.6697 20.5212 0.6697 17.0622Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}