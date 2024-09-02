import { IconProps } from "../../types"

export default function FanDeskFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.654296875 35.423828125"
          className={className}
        >
          <path
            d="              M6.3847 35.4242H23.2697C24.2947 35.4242 24.8277 34.5492 24.8277 33.5232C24.8277 32.0332 23.4887 31.0492 21.9157 31.0492H17.0077V29.4902C24.1587 28.4512 29.6547 22.2712 29.6547 14.8342C29.6547 6.6442 23.0097 0.0002 14.8207 0.0002C6.6447 0.0002 -0.0003 6.6442 -0.0003 14.8342C-0.0003 22.2712 5.4957 28.4512 12.6327 29.4902V31.0492H7.7387C6.1657 31.0492 4.8267 32.0332 4.8267 33.5232C4.8267 34.5492 5.3597 35.4242 6.3847 35.4242ZM10.4177 23.5842C7.7107 23.5842 5.4007 20.9042 5.4007 18.0602C5.4007 16.3652 6.3987 15.3942 8.1347 15.3942H10.8417C10.8007 15.0662 10.8007 14.8612 10.8147 14.5472C7.7657 13.8902 6.0837 12.6462 6.0837 10.4312C6.0837 7.7242 8.7497 5.4142 11.5937 5.4142C13.2757 5.4142 14.2597 6.4122 14.2597 8.1482V10.8282C14.5607 10.7872 14.7657 10.7872 15.1207 10.8012C15.7777 7.7792 17.0347 6.0972 19.2367 6.0972C21.9437 6.0972 24.2537 8.7772 24.2537 11.6212C24.2537 13.3162 23.2557 14.2872 21.5197 14.2872H18.8397C18.8677 14.5742 18.8677 14.8062 18.8537 15.1352C21.9027 15.7912 23.5707 17.0352 23.5707 19.2502C23.5707 21.9572 20.9047 24.2672 18.0607 24.2672C16.3787 24.2672 15.3947 23.2562 15.3947 21.5332V18.8262C15.0937 18.8532 14.8747 18.8532 14.5337 18.8402C13.8767 21.8752 12.6467 23.5842 10.4177 23.5842ZM14.8207 16.7892C15.9277 16.7892 16.7757 15.9412 16.7757 14.8342C16.7757 13.7952 15.9277 12.8922 14.8207 12.8922C13.7267 12.8922 12.8787 13.7402 12.8787 14.8342C12.8787 15.8872 13.7267 16.7892 14.8207 16.7892Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.669921875 33.619140625"
          className={className}
        >
          <path
            d="              M6.4937 33.6188H22.1897C22.9547 33.6188 23.3787 33.0038 23.3787 32.2248C23.3787 30.9668 22.2987 30.1188 20.8637 30.1188H15.9827V28.5608C23.1187 27.7678 28.6697 21.6968 28.6697 14.3278C28.6697 6.4118 22.2577 -0.0002 14.3277 -0.0002C6.4117 -0.0002 -0.0003 6.4118 -0.0003 14.3278C-0.0003 21.6968 5.5507 27.7678 12.6877 28.5608V30.1188H7.8207C6.3707 30.1188 5.2907 30.9668 5.2907 32.2248C5.2907 33.0038 5.7147 33.6188 6.4937 33.6188ZM9.8847 23.2008C7.3007 23.2008 4.8537 20.3988 4.8537 17.5408C4.8537 15.9008 5.7837 15.0118 7.4647 15.0118H10.3767C10.3357 14.7248 10.3227 14.4508 10.3357 14.1778C7.2327 13.2478 5.5237 12.0858 5.5237 9.9258C5.5237 7.3418 8.2987 4.8808 11.1697 4.8808C12.7967 4.8808 13.6997 5.8238 13.6997 7.5058V10.3498C13.9867 10.2948 14.2597 10.2948 14.5607 10.3088C15.4767 7.2458 16.6527 5.5648 18.7847 5.5648C21.3687 5.5648 23.8297 8.3538 23.8297 11.2108C23.8297 12.8518 22.8867 13.7398 21.2047 13.7398H18.3337C18.3617 14.0408 18.3747 14.2738 18.3617 14.5878C21.4517 15.5038 23.1597 16.6798 23.1597 18.8258C23.1597 21.4098 20.3707 23.8708 17.5137 23.8708C15.8727 23.8708 14.9847 22.9278 14.9847 21.2458V18.3068C14.6977 18.3338 14.4787 18.3478 14.1507 18.3338C13.2207 21.4648 12.0447 23.2008 9.8847 23.2008ZM14.3277 16.3518C15.4357 16.3518 16.3107 15.4768 16.3107 14.3828C16.3107 13.3028 15.4357 12.4008 14.3277 12.4008C13.2347 12.4008 12.3597 13.2758 12.3597 14.3828C12.3597 15.4628 13.2347 16.3518 14.3277 16.3518Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.189453125 34.576171875"
          className={className}
        >
          <path
            d="              M6.4397 34.5763H22.7637C23.6657 34.5763 24.1447 33.8243 24.1447 32.9223C24.1447 31.5273 22.9277 30.6113 21.4097 30.6113H16.5297V29.0523C23.6657 28.1233 29.1897 22.0113 29.1897 14.6013C29.1897 6.5353 22.6547 0.0003 14.5877 0.0003C6.5347 0.0003 -0.0003 6.5353 -0.0003 14.6013C-0.0003 22.0113 5.5237 28.1233 12.6597 29.0523V30.6113H7.7797C6.2617 30.6113 5.0447 31.5273 5.0447 32.9223C5.0447 33.8243 5.5367 34.5763 6.4397 34.5763ZM10.1717 23.4063C7.5197 23.4063 5.1407 20.6723 5.1407 17.8143C5.1407 16.1463 6.1117 15.2163 7.8207 15.2163H10.6227C10.5817 14.9023 10.5687 14.6703 10.5817 14.3693C7.5197 13.5893 5.8247 12.3863 5.8247 10.1993C5.8247 7.5473 8.5317 5.1683 11.3887 5.1683C13.0567 5.1683 13.9867 6.1383 13.9867 7.8473V10.6093C14.3007 10.5543 14.5197 10.5543 14.8617 10.5683C15.6407 7.5333 16.8577 5.8513 19.0177 5.8513C21.6697 5.8513 24.0487 8.5723 24.0487 11.4293C24.0487 13.0973 23.0777 14.0273 21.3687 14.0273H18.5937C18.6347 14.3283 18.6347 14.5603 18.6207 14.8753C21.6837 15.6543 23.3787 16.8713 23.3787 19.0453C23.3787 21.6973 20.6587 24.0763 17.8007 24.0763C16.1467 24.0763 15.2027 23.1053 15.2027 21.3963V18.5803C14.9027 18.6073 14.6837 18.6213 14.3557 18.6073C13.5767 21.6833 12.3597 23.4063 10.1717 23.4063ZM14.5877 16.5843C15.6957 16.5843 16.5567 15.7223 16.5567 14.6293C16.5567 13.5623 15.6957 12.6603 14.5877 12.6603C13.4937 12.6603 12.6327 13.5213 12.6327 14.6293C12.6327 15.6813 13.4937 16.5843 14.5877 16.5843Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.8515625 30.5703125"
          className={className}
        >
          <path
            d="              M6.6587 30.5703H20.2067C20.6177 30.5703 20.8767 30.2973 20.8767 29.8733C20.8767 29.0663 20.2347 28.4783 19.1817 28.4783H14.2737V26.8243C21.2867 26.3863 26.8517 20.5623 26.8517 13.4263C26.8517 6.0153 20.8497 0.0003 13.4257 0.0003C6.0017 0.0003 -0.0003 6.0023 -0.0003 13.4263C-0.0003 20.5623 5.5507 26.4003 12.5777 26.8243V28.4783H7.6697C6.6177 28.4783 5.9747 29.0663 5.9747 29.8733C5.9747 30.2973 6.2477 30.5703 6.6587 30.5703ZM8.9417 22.3403C6.3437 22.3403 3.7597 19.4413 3.7597 16.5292C3.7597 14.9573 4.5937 14.1773 6.2067 14.1773H9.6797C9.6247 13.9183 9.5977 13.5353 9.6117 13.2753C6.2887 12.2633 4.5667 11.1013 4.5667 8.9823C4.5667 6.3852 7.4647 3.8012 10.3907 3.8012C11.9497 3.8012 12.7427 4.6352 12.7427 6.2482V9.6523C13.0297 9.5843 13.4257 9.5843 13.6307 9.5973C14.6427 6.3023 15.8187 4.6073 17.9237 4.6073C20.5077 4.6073 23.0917 7.5063 23.0917 10.4313C23.0917 11.9903 22.2577 12.7693 20.6587 12.7693H17.2127C17.2537 13.0563 17.2677 13.4123 17.2537 13.6853C20.5627 14.6973 22.2987 15.8453 22.2987 17.9653C22.2987 20.5623 19.3867 23.1463 16.4747 23.1463C14.9027 23.1463 14.1227 22.3123 14.1227 20.6993V17.1853C13.8357 17.2403 13.6037 17.2403 13.2757 17.2403C12.2497 20.6033 11.0607 22.3403 8.9417 22.3403ZM13.4257 15.5993C14.5877 15.5993 15.5587 14.6563 15.5587 13.4803C15.5587 12.3043 14.5877 11.3473 13.4257 11.3473C12.2497 11.3473 11.2927 12.3043 11.2927 13.4803C11.2927 14.6563 12.2497 15.5993 13.4257 15.5993Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.041015625 32.470703125"
          className={className}
        >
          <path
            d="              M6.5487 32.4706H21.4927C22.0937 32.4706 22.4627 32.0196 22.4627 31.4046C22.4627 30.2836 21.5337 29.5176 20.1797 29.5176H15.3127V27.9726C22.4497 27.3296 28.0407 21.3286 28.0407 14.0136C28.0407 6.2756 21.7657 -0.0004 14.0137 -0.0004C6.2757 -0.0004 -0.0003 6.2756 -0.0003 14.0136C-0.0003 21.3286 5.5917 27.3296 12.7287 27.9726V29.5176H7.8617C6.5077 29.5176 5.5917 30.2836 5.5917 31.4046C5.5917 32.0196 5.9477 32.4706 6.5487 32.4706ZM9.5427 22.9546C7.0407 22.9546 4.4977 20.0836 4.4977 17.2126C4.4977 15.5996 5.3867 14.7656 7.0277 14.7656H10.0897C10.0347 14.5056 10.0077 14.2046 10.0217 13.9316C6.8907 12.8376 5.1547 11.7166 5.1547 9.5976C5.1547 7.1096 8.0257 4.5526 10.8967 4.5526C12.4957 4.5526 13.3297 5.4546 13.3297 7.0816V10.0486C13.6307 9.9946 13.9317 9.9946 14.2047 9.9946C15.2847 6.9176 16.4067 5.2226 18.5117 5.2226C20.9997 5.2226 23.5567 8.0796 23.5567 10.9516C23.5567 12.5646 22.6547 13.3986 21.0137 13.3986H18.0057C18.0467 13.6996 18.0467 13.9456 18.0467 14.2456C21.1637 15.3396 22.8867 16.4476 22.8867 18.5666C22.8867 21.0686 20.0297 23.6116 17.1587 23.6116C15.5447 23.6116 14.7107 22.7226 14.7107 21.0816V17.9646C14.4377 18.0196 14.2187 18.0196 13.9177 18.0196C12.7967 21.1916 11.6757 22.9546 9.5427 22.9546ZM14.0137 16.0786C15.1347 16.0786 16.0237 15.2036 16.0237 14.0816C16.0237 12.9886 15.1347 12.0856 14.0137 12.0856C12.9067 12.0856 12.0317 12.9746 12.0317 14.0816C12.0317 15.1896 12.9067 16.0786 14.0137 16.0786Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.685546875 31.841796875"
          className={className}
        >
          <path
            d="              M6.5897 31.8422H21.0957C21.6157 31.8422 21.9437 31.4732 21.9437 30.9392C21.9437 29.9142 21.1097 29.1892 19.8107 29.1892H14.9437V27.6442C22.0797 27.0842 27.6857 21.1372 27.6857 13.8492C27.6857 6.2072 21.4927 0.0002 13.8497 0.0002C6.1937 0.0002 -0.0003 6.1932 -0.0003 13.8492C-0.0003 21.1372 5.6057 27.0982 12.7427 27.6442V29.1892H7.8887C6.5897 29.1892 5.7557 29.9142 5.7557 30.9392C5.7557 31.4732 6.0837 31.8422 6.5897 31.8422ZM9.3517 22.8182C6.8907 22.8182 4.2927 19.9202 4.2927 17.0352C4.2927 15.4492 5.1677 14.6422 6.7817 14.6422H9.9257C9.8707 14.3832 9.8437 14.0682 9.8437 13.8082C6.6997 12.6192 4.9497 11.5252 4.9497 9.4332C4.9497 6.9722 7.8617 4.3752 10.7457 4.3752C12.3317 4.3752 13.1387 5.2502 13.1387 6.8632V9.8982C13.4257 9.8302 13.7537 9.8302 13.9997 9.8302C15.1757 6.7402 16.2697 5.0312 18.3477 5.0312C20.7947 5.0312 23.4067 7.9432 23.4067 10.8142C23.4067 12.4002 22.5177 13.2072 20.9047 13.2072H17.8277C17.8557 13.5082 17.8687 13.7672 17.8557 14.0552C20.9997 15.2442 22.7367 16.3242 22.7367 18.4302C22.7367 20.8772 19.8247 23.4882 16.9527 23.4882C15.3677 23.4882 14.5607 22.6132 14.5607 20.9862V17.8012C14.3007 17.8422 14.0687 17.8552 13.7817 17.8422C12.5647 21.0552 11.4567 22.8182 9.3517 22.8182ZM13.8497 15.9282C14.9567 15.9282 15.8457 15.0392 15.8457 13.9312C15.8457 12.8102 14.9567 11.9222 13.8497 11.9222C12.7287 11.9222 11.8397 12.8102 11.8397 13.9312C11.8397 15.0392 12.7287 15.9282 13.8497 15.9282Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.314453125 32.962890625"
          className={className}
        >
          <path
            d="              M6.5217 32.9627H21.7927C22.4627 32.9627 22.8597 32.4437 22.8597 31.7597C22.8597 30.5707 21.8617 29.7777 20.4807 29.7777H15.5997V28.2327C22.7367 27.5077 28.3147 21.4917 28.3147 14.1507C28.3147 6.3297 21.9707 -0.0003 14.1507 -0.0003C6.3437 -0.0003 -0.0003 6.3297 -0.0003 14.1507C-0.0003 21.4917 5.5777 27.5217 12.7147 28.2327V29.7777H7.8477C6.4527 29.7777 5.4547 30.5707 5.4547 31.7597C5.4547 32.4437 5.8517 32.9627 6.5217 32.9627ZM9.6937 23.0507C7.1507 23.0507 4.6487 20.2207 4.6487 17.3497C4.6487 15.7367 5.5647 14.8747 7.2187 14.8747H10.2127C10.1717 14.6017 10.1447 14.3147 10.1587 14.0407C7.0407 13.0157 5.3187 11.8807 5.3187 9.7347C5.3187 7.2047 8.1487 4.6897 11.0057 4.6897C12.6327 4.6897 13.4937 5.6057 13.4937 7.2597V10.1857C13.7817 10.1167 14.0687 10.1167 14.3557 10.1307C15.3677 7.0547 16.5157 5.3597 18.6207 5.3597C21.1637 5.3597 23.6657 8.1897 23.6657 11.0607C23.6657 12.6877 22.7497 13.5347 21.0957 13.5347H18.1427C18.1837 13.8357 18.1837 14.0817 18.1837 14.3967C21.2867 15.4077 23.0097 16.5427 23.0097 18.6757C23.0097 21.2047 20.1797 23.7207 17.3087 23.7207C15.6817 23.7207 14.8337 22.8047 14.8337 21.1507V18.1157C14.5467 18.1567 14.3277 18.1567 14.0137 18.1567C12.9887 21.3007 11.8397 23.0507 9.6937 23.0507ZM14.1507 16.2007C15.2577 16.2007 16.1467 15.3127 16.1467 14.2047C16.1467 13.1117 15.2577 12.2227 14.1507 12.2227C13.0427 12.2227 12.1677 13.0977 12.1677 14.2047C12.1677 15.2987 13.0567 16.2007 14.1507 16.2007Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.744140625 28.90234375"
          className={className}
        >
          <path
            d="              M6.7267 28.9023H19.0177C19.2907 28.9023 19.4687 28.7243 19.4687 28.4513C19.4687 27.9453 19.0857 27.5213 18.3617 27.5213H13.3847V25.7303C20.2477 25.4573 25.7437 19.8243 25.7437 12.8653C25.7437 5.7693 19.9887 0.0003 12.8657 0.0003C5.7557 0.0003 -0.0003 5.7563 -0.0003 12.8653C-0.0003 19.8243 5.4827 25.4703 12.3727 25.7303V27.5213H7.3967C6.6587 27.5213 6.2757 27.9453 6.2757 28.4513C6.2757 28.7243 6.4667 28.9023 6.7267 28.9023ZM8.3947 21.6973C5.6187 21.6973 3.0487 18.8123 3.0487 15.8453C3.0487 14.3143 3.8417 13.5493 5.4417 13.5493H9.3657C9.3107 13.3023 9.2837 12.8243 9.3107 12.5783C5.7557 11.7993 4.0467 10.5413 4.0467 8.3813C4.0467 5.6053 6.9457 3.0353 9.9257 3.0353C11.4567 3.0353 12.2227 3.8283 12.2227 5.4273V9.3243C12.5237 9.2693 12.9887 9.2693 13.1527 9.2833C13.9587 5.7283 15.2027 4.0473 17.3637 4.0473C20.1387 4.0473 22.6957 6.9313 22.6957 9.8983C22.6957 11.4433 21.9027 12.1953 20.3167 12.1953H16.4067C16.4477 12.4553 16.4747 12.9473 16.4477 13.1793C20.0017 13.9593 21.7107 15.2173 21.7107 17.3633C21.7107 20.1383 18.8127 22.7093 15.8317 22.7093C14.3007 22.7093 13.5347 21.9163 13.5347 20.3303V16.3793C13.2347 16.4473 12.9887 16.4473 12.6057 16.4333C11.8267 20.0023 10.5407 21.6973 8.3947 21.6973ZM12.8657 15.1763C14.1097 15.1763 15.1757 14.1363 15.1757 12.8923C15.1757 11.6343 14.1097 10.5823 12.8657 10.5823C11.6077 10.5823 10.5817 11.6343 10.5817 12.8923C10.5817 14.1363 11.6207 15.1763 12.8657 15.1763Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.169921875 28.0546875"
          className={className}
        >
          <path
            d="              M6.7677 28.0544H18.4157C18.6207 28.0544 18.7577 27.9184 18.7577 27.7404C18.7577 27.3844 18.4977 27.0434 17.9377 27.0434H12.9337V25.1694C19.7147 24.9784 25.1697 19.4414 25.1697 12.5914C25.1697 5.6324 19.5507 0.0004 12.5777 0.0004C5.6327 0.0004 -0.0003 5.6194 -0.0003 12.5914C-0.0003 19.4414 5.4417 24.9924 12.2637 25.1694V27.0434H7.2457C6.6857 27.0434 6.4397 27.3844 6.4397 27.7404C6.4397 27.9184 6.5767 28.0544 6.7677 28.0544ZM8.1077 21.3824C5.2367 21.3824 2.6937 18.4984 2.6937 15.5034C2.6937 13.9864 3.4587 13.2344 5.0447 13.2344H9.2017C9.1467 12.9884 9.1187 12.4554 9.1467 12.2224C5.4687 11.5664 3.7867 10.2534 3.7867 8.0804C3.7867 5.2094 6.6857 2.6524 9.6797 2.6524C11.1977 2.6524 11.9497 3.4184 11.9497 5.0034V9.1604C12.2637 9.1054 12.7697 9.1054 12.9067 9.1324C13.6037 5.4274 14.8887 3.7594 17.0767 3.7594C19.9477 3.7594 22.4907 6.6304 22.4907 9.6384C22.4907 11.1564 21.7247 11.9084 20.1387 11.9084H15.9827C16.0367 12.1544 16.0777 12.7144 16.0367 12.9194C19.7147 13.5894 21.4097 14.8884 21.4097 17.0484C21.4097 19.9194 18.5117 22.4904 15.5037 22.4904C13.9867 22.4904 13.2347 21.7244 13.2347 20.1384V15.9684C12.9197 16.0504 12.6737 16.0374 12.2637 16.0094C11.6077 19.7014 10.2677 21.3824 8.1077 21.3824ZM12.5777 14.9434C13.8767 14.9434 14.9707 13.8774 14.9707 12.5914C14.9707 11.2934 13.8767 10.1854 12.5777 10.1854C11.2797 10.1854 10.2127 11.2934 10.2127 12.5914C10.2127 13.8774 11.2927 14.9434 12.5777 14.9434Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
