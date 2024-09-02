import { IconProps } from "../../types"

export default function CedisignIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.107421875 30.201171875"
          className={className}
        >
          <path
            d="              M11.5257 30.2009C11.9357 30.2009 12.2497 29.8729 12.2497 29.4629V27.6449C16.7757 27.4529 20.4257 25.1969 21.7387 21.8479C21.9707 21.2599 22.1077 20.6309 22.1077 20.0429C22.1077 18.2379 20.8637 17.0489 18.9767 17.0489C17.5547 17.0489 16.7887 17.6509 16.0777 19.0999C15.1347 21.0549 13.9047 22.0939 12.2497 22.2579V8.0389C13.9177 8.2719 15.0667 9.2829 15.9957 11.0739C16.7477 12.4959 17.5957 13.1109 19.0587 13.1109C20.8087 13.1109 21.9437 11.9899 21.9437 10.2539C21.9437 9.4339 21.7107 8.5999 21.2737 7.8069C19.5917 4.7439 16.4477 2.8709 12.2497 2.6519V0.7379C12.2497 0.3279 11.9357 -0.0001 11.5257 -0.0001C11.1017 -0.0001 10.8007 0.3279 10.8007 0.7379V2.6519C3.9517 2.9119 -0.0003 7.4509 -0.0003 15.1209C-0.0003 22.7769 3.8827 27.3029 10.8007 27.6309V29.4629C10.8007 29.8729 11.1017 30.2009 11.5257 30.2009ZM6.9047 15.0259C6.9047 10.9239 8.1487 8.3809 10.8007 8.0389V22.1899C8.2437 21.6699 6.9047 19.0719 6.9047 15.0259Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.86328125 30.392578125"
          className={className}
        >
          <path
            d="              M10.8827 30.3925C11.3337 30.3925 11.6897 30.0375 11.6897 29.5725V27.6715C16.0237 27.4665 19.3317 25.2515 20.5627 21.9975C20.7537 21.4925 20.8637 20.9725 20.8637 20.4665C20.8637 19.2085 20.0017 18.3745 18.7027 18.3745C17.6227 18.3745 17.0767 18.8675 16.5977 19.9475C15.7777 22.1895 14.0137 23.5835 11.6897 23.7755V6.6585C13.9457 6.9045 15.6407 8.3125 16.4607 10.4725C16.9667 11.5665 17.5547 12.0315 18.6487 12.0315C19.8927 12.0315 20.6997 11.2245 20.6857 9.9945C20.6857 9.3925 20.5347 8.7775 20.2477 8.1895C18.8127 5.0175 15.6817 2.9805 11.6897 2.7615V0.8205C11.6897 0.3695 11.3337 -0.0005 10.8827 -0.0005C10.4317 -0.0005 10.0767 0.3695 10.0767 0.8205V2.7615C3.8147 3.1585 -0.0003 7.7655 -0.0003 15.1625C-0.0003 22.5995 3.7597 27.2345 10.0767 27.6585V29.5725C10.0767 30.0375 10.4317 30.3925 10.8827 30.3925ZM4.8267 15.1075C4.8267 10.2535 6.7407 7.1365 10.0767 6.6715V23.7205C6.7677 23.1735 4.8267 20.0015 4.8267 15.1075Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.51953125 30.296875"
          className={className}
        >
          <path
            d="              M11.2247 30.2972C11.6487 30.2972 11.9907 29.9552 11.9907 29.5172V27.6582C16.4197 27.4672 19.9067 25.2242 21.1777 21.9162C21.3967 21.3692 21.5197 20.7952 21.5197 20.2342C21.5197 18.7032 20.4527 17.6782 18.8397 17.6782C17.5817 17.6782 16.9257 18.2242 16.3247 19.4962C15.4357 21.5882 13.9587 22.8042 11.9907 22.9822V7.3962C13.9317 7.6292 15.3267 8.8182 16.2147 10.7872C16.8437 12.0582 17.5817 12.6052 18.8677 12.6052C20.3707 12.6052 21.3557 11.6352 21.3557 10.1312C21.3557 9.4202 21.1637 8.6812 20.7817 7.9842C19.2227 4.8812 16.0917 2.9262 11.9907 2.7072V0.7792C11.9907 0.3422 11.6487 0.0002 11.2247 0.0002C10.7867 0.0002 10.4587 0.3422 10.4587 0.7792V2.7072C3.8827 3.0212 -0.0003 7.6012 -0.0003 15.1352C-0.0003 22.6952 3.8277 27.2752 10.4587 27.6442V29.5172C10.4587 29.9552 10.7867 30.2972 11.2247 30.2972ZM5.9337 15.0662C5.9337 10.6092 7.4927 7.7932 10.4587 7.3962V22.9142C7.5467 22.3812 5.9337 19.5102 5.9337 15.0662Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.208984375 30.337890625"
          className={className}
        >
          <path
            d="              M10.0077 30.3378C10.3907 30.3378 10.7047 30.0238 10.7047 29.6408V27.3438C14.8887 27.1938 17.8967 24.9648 18.9767 21.7108C19.0997 21.3008 19.1817 20.8768 19.2087 20.4668C19.2087 19.9338 18.8677 19.5368 18.2927 19.5368C17.7597 19.5368 17.4867 19.8378 17.3227 20.3848C16.6937 23.3378 14.1227 25.3748 10.7047 25.5388V4.6348C13.9867 4.8258 16.5567 7.0408 17.1997 9.9528C17.3637 10.5548 17.6507 10.8148 18.1837 10.8148C18.7437 10.8148 19.0997 10.4178 19.0857 9.8578C19.0587 9.4748 18.9907 9.1188 18.8807 8.7638C17.7327 5.2778 14.5607 2.9938 10.7047 2.8168V0.6968C10.7047 0.3148 10.3907 -0.0002 10.0077 -0.0002C9.6247 -0.0002 9.3107 0.3148 9.3107 0.6968V2.8438C3.5817 3.2808 -0.0003 7.8888 -0.0003 14.9708C-0.0003 22.1618 3.5687 26.8648 9.3107 27.3168V29.6408C9.3107 30.0238 9.6247 30.3378 10.0077 30.3378ZM2.0507 14.9708C2.0507 9.0098 4.8127 5.1268 9.3107 4.6618V25.5118C4.8267 25.0198 2.0507 21.0408 2.0507 14.9708Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.0703125 30.515625"
          className={className}
        >
          <path
            d="              M10.4727 30.5159C10.9517 30.5159 11.3337 30.1189 11.3337 29.6409V27.6859C15.5447 27.4669 18.6347 25.2929 19.8107 22.0799C19.9747 21.6429 20.0567 21.1779 20.0707 20.7269C20.0707 19.8239 19.4687 19.2089 18.5117 19.2089C17.6777 19.2089 17.2537 19.6469 16.9257 20.4809C16.1737 22.8999 14.0687 24.5269 11.3337 24.7459V5.7559C13.9457 6.0159 16.0237 7.6969 16.7617 10.0759C17.1037 10.9649 17.5407 11.3339 18.3887 11.3339C19.3047 11.3339 19.8927 10.7329 19.8927 9.8299C19.8787 9.3519 19.7837 8.8869 19.5917 8.4219C18.3207 5.1949 15.2027 3.0489 11.3337 2.8169V0.8609C11.3337 0.3969 10.9517 -0.0001 10.4727 -0.0001C9.9937 -0.0001 9.6117 0.3969 9.6117 0.8609V2.8439C3.7187 3.3089 -0.0003 7.9569 -0.0003 15.1759C-0.0003 22.4769 3.6917 27.1659 9.6117 27.6579V29.6409C9.6117 30.1189 9.9937 30.5159 10.4727 30.5159ZM3.4997 15.1619C3.4997 9.8029 5.8247 6.3169 9.6117 5.7969V24.6919C5.8377 24.1309 3.4997 20.5759 3.4997 15.1619Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.61942608151339 30.5703125"
          className={className}
        >
          <path
            d="              M10.2407 30.5706C10.7327 30.5706 11.1287 30.1736 11.1287 29.6816V27.6856C15.2717 27.4666 18.2387 25.3066 19.3867 22.1216C19.5367 21.7106 19.6057 21.3006 19.6187 20.8766C19.6327 20.1656 19.1547 19.6736 18.4157 19.6736C17.7047 19.6736 17.3497 20.0706 17.1177 20.7816C16.4067 23.2966 14.1097 25.0606 11.1287 25.2796V5.2636C13.9457 5.5096 16.2287 7.3556 16.9397 9.8436C17.1857 10.6366 17.5277 10.9516 18.2387 10.9516C18.9767 10.9516 19.4547 10.4586 19.4417 9.7346C19.4277 9.3246 19.3597 8.9416 19.2227 8.5586C18.0467 5.2906 14.9297 3.0896 11.1287 2.8436V0.8886C11.1287 0.3966 10.7327 -0.0004 10.2407 -0.0004C9.7477 -0.0004 9.3517 0.3966 9.3517 0.8886V2.8716C3.6637 3.4046 -0.0003 8.0806 -0.0003 15.1896C-0.0003 22.3946 3.6507 27.1246 9.3517 27.6586V29.6816C9.3517 30.1736 9.7477 30.5706 10.2407 30.5706ZM2.7477 15.1896C2.7477 9.5566 5.3187 5.8656 9.3517 5.3046V25.2386C5.3047 24.6636 2.7477 20.8906 2.7477 15.1896Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.412109375 30.4609375"
          className={className}
        >
          <path
            d="              M10.6507 30.4612C11.1157 30.4612 11.4847 30.0782 11.4847 29.6132V27.6722C15.7497 27.4672 18.9357 25.2652 20.1387 22.0392C20.3167 21.5742 20.3987 21.0822 20.4117 20.6172C20.4117 19.5642 19.7017 18.8402 18.5937 18.8402C17.6507 18.8402 17.1717 19.3042 16.7887 20.2482C15.9957 22.5862 14.0407 24.1172 11.4847 24.3222V6.1382C13.9457 6.3982 15.8597 7.9702 16.6387 10.2402C17.0487 11.2242 17.5547 11.6352 18.4977 11.6352C19.5507 11.6352 20.2477 10.9512 20.2347 9.8982C20.2347 9.3652 20.1117 8.8322 19.8787 8.3262C18.5387 5.1132 15.4087 3.0212 11.4847 2.7892V0.8472C11.4847 0.3832 11.1157 0.0002 10.6507 0.0002C10.1857 0.0002 9.8167 0.3832 9.8167 0.8472V2.8032C3.7597 3.2402 -0.0003 7.8752 -0.0003 15.1762C-0.0003 22.5312 3.7187 27.1932 9.8167 27.6582V29.6132C9.8167 30.0782 10.1857 30.4612 10.6507 30.4612ZM4.0747 15.1352C4.0747 9.9942 6.2207 6.6722 9.8167 6.1792V24.2672C6.2347 23.7072 4.0747 20.3162 4.0747 15.1352Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.649225485868378 30.037109375"
          className={className}
        >
          <path
            d="              M9.6937 30.0374C9.9397 30.0374 10.1447 29.8324 10.1447 29.5864V26.8924C14.3687 26.8244 17.4457 24.5274 18.4157 21.1644C18.5257 20.7404 18.6077 20.3304 18.6487 19.9204C18.6617 19.6194 18.4977 19.3454 18.1427 19.3454C17.8277 19.3454 17.6637 19.5504 17.5817 19.8784C17.0767 23.4204 14.1367 25.7984 10.1447 25.8804V3.8144C14.0547 3.9104 16.9807 6.6174 17.5547 10.1034C17.6097 10.4454 17.8007 10.6234 18.1017 10.6234C18.4297 10.6234 18.6347 10.3634 18.6077 10.0214C18.5527 9.6664 18.4977 9.3514 18.4157 9.0374C17.3227 5.2504 14.0817 2.8574 10.1447 2.7894V0.4514C10.1447 0.2054 9.9397 0.0004 9.6937 0.0004C9.4477 0.0004 9.2427 0.2054 9.2427 0.4514V2.8024C3.4457 3.1444 -0.0003 7.6564 -0.0003 14.6704C-0.0003 21.8474 3.4727 26.5234 9.2427 26.8794V29.5864C9.2427 29.8324 9.4477 30.0374 9.6937 30.0374ZM1.1347 14.6704C1.1347 8.2854 4.1287 4.1834 9.2427 3.8414V25.8534C4.1697 25.4984 1.1347 21.2324 1.1347 14.6704Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.376440838799397 29.873046875"
          className={className}
        >
          <path
            d="              M9.5297 29.8734C9.7067 29.8734 9.8577 29.7224 9.8577 29.5584V26.6604C14.0817 26.6604 17.1997 24.3224 18.1287 20.8774C18.2247 20.4534 18.3207 20.0434 18.3747 19.6324C18.3887 19.4554 18.3067 19.2504 18.0607 19.2504C17.8687 19.2504 17.7597 19.3864 17.7187 19.6054C17.2817 23.4474 14.1507 26.0174 9.8577 26.0454V3.4044C14.0687 3.4044 17.2127 6.3844 17.7327 10.1724C17.7457 10.3904 17.8827 10.5274 18.0607 10.5274C18.2797 10.5274 18.3887 10.3364 18.3617 10.1034C18.3067 9.7614 18.2517 9.4614 18.1837 9.1604C17.1037 5.2364 13.8357 2.7894 9.8577 2.7614V0.3144C9.8577 0.1504 9.7067 0.0004 9.5297 0.0004C9.3657 0.0004 9.2147 0.1504 9.2147 0.3144V2.7754C3.3767 3.0624 -0.0003 7.5334 -0.0003 14.5194C-0.0003 21.6704 3.4317 26.3454 9.2147 26.6464V29.5584C9.2147 29.7224 9.3657 29.8734 9.5297 29.8734ZM0.6567 14.5194C0.6567 7.9164 3.7737 3.6914 9.2147 3.4184V26.0314C3.8417 25.7304 0.6567 21.3284 0.6567 14.5194Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}