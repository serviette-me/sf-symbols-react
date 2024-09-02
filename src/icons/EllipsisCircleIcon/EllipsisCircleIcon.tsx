import { IconProps } from "../../types"

export default function EllipsisCircleIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.873046875 29.859375"
          className={className}
        >
          <path
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM8.3667 17.2951C9.6797 17.2951 10.7457 16.2281 10.7457 14.9161C10.7457 13.6031 9.6797 12.5371 8.3667 12.5371C7.0547 12.5371 5.9887 13.6031 5.9887 14.9161C5.9887 16.2281 7.0547 17.2951 8.3667 17.2951ZM14.9297 17.2951C16.2417 17.2951 17.3087 16.2281 17.3087 14.9161C17.3087 13.6031 16.2417 12.5371 14.9297 12.5371C13.6167 12.5371 12.5507 13.6031 12.5507 14.9161C12.5507 16.2281 13.6167 17.2951 14.9297 17.2951ZM21.5057 17.2951C22.8187 17.2951 23.8847 16.2281 23.8847 14.9161C23.8847 13.6031 22.8187 12.5371 21.5057 12.5371C20.1937 12.5371 19.1137 13.6031 19.1137 14.9161C19.1137 16.2281 20.1937 17.2951 21.5057 17.2951Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.875 28.888671875"
          className={className}
        >
          <path
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM7.9567 16.6116C9.1597 16.6116 10.1447 15.6266 10.1447 14.4376C10.1447 13.2346 9.1597 12.2496 7.9567 12.2496C6.7537 12.2496 5.7827 13.2346 5.7827 14.4376C5.7827 15.6266 6.7537 16.6116 7.9567 16.6116ZM14.4377 16.6116C15.6407 16.6116 16.6117 15.6266 16.6117 14.4376C16.6117 13.2346 15.6407 12.2496 14.4377 12.2496C13.2347 12.2496 12.2497 13.2346 12.2497 14.4376C12.2497 15.6266 13.2347 16.6116 14.4377 16.6116ZM20.9047 16.6116C22.1077 16.6116 23.0917 15.6266 23.0917 14.4376C23.0917 13.2346 22.1077 12.2496 20.9047 12.2496C19.7007 12.2496 18.7307 13.2346 18.7307 14.4376C18.7307 15.6266 19.7007 16.6116 20.9047 16.6116Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.408203125 29.408203125"
          className={className}
        >
          <path
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM8.1757 16.9804C9.4337 16.9804 10.4587 15.9554 10.4587 14.6974C10.4587 13.4394 9.4337 12.4004 8.1757 12.4004C6.9177 12.4004 5.8927 13.4394 5.8927 14.6974C5.8927 15.9554 6.9177 16.9804 8.1757 16.9804ZM14.6977 16.9804C15.9547 16.9804 16.9807 15.9554 16.9807 14.6974C16.9807 13.4394 15.9547 12.4004 14.6977 12.4004C13.4397 12.4004 12.4137 13.4394 12.4137 14.6974C12.4137 15.9554 13.4397 16.9804 14.6977 16.9804ZM21.2187 16.9804C22.4767 16.9804 23.5017 15.9554 23.5017 14.6974C23.5017 13.4394 22.4767 12.4004 21.2187 12.4004C19.9607 12.4004 18.9357 13.4394 18.9357 14.6974C18.9357 15.9554 19.9607 16.9804 21.2187 16.9804Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.42578125 27.42578125"
          className={className}
        >
          <path
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM7.3967 15.531C8.4217 15.531 9.2417 14.711 9.2417 13.699C9.2417 12.674 8.4077 11.854 7.3967 11.854C6.3847 11.854 5.5647 12.674 5.5647 13.699C5.5647 14.711 6.3847 15.531 7.3967 15.531ZM13.6987 15.531C14.7247 15.531 15.5447 14.711 15.5447 13.699C15.5447 12.674 14.7247 11.854 13.6987 11.854C12.6877 11.854 11.8667 12.674 11.8667 13.699C11.8667 14.711 12.6877 15.531 13.6987 15.531ZM20.0157 15.531C21.0277 15.531 21.8477 14.711 21.8477 13.699C21.8477 12.674 21.0277 11.854 20.0157 11.854C18.9907 11.854 18.1697 12.674 18.1697 13.699C18.1697 14.711 18.9907 15.531 20.0157 15.531Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.24609375 28.24609375"
          className={className}
        >
          <path
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM7.6977 16.1741C8.8317 16.1741 9.7477 15.2441 9.7477 14.1091C9.7477 12.9881 8.8187 12.0581 7.6977 12.0581C6.5757 12.0581 5.6467 12.9881 5.6467 14.1091C5.6467 15.2441 6.5757 16.1741 7.6977 16.1741ZM14.1097 16.1741C15.2437 16.1741 16.1597 15.2441 16.1597 14.1091C16.1597 12.9881 15.2437 12.0581 14.1097 12.0581C12.9887 12.0581 12.0587 12.9881 12.0587 14.1091C12.0587 15.2441 12.9887 16.1741 14.1097 16.1741ZM20.5217 16.1741C21.6567 16.1741 22.5727 15.2441 22.5727 14.1091C22.5727 12.9881 21.6567 12.0581 20.5217 12.0581C19.4007 12.0581 18.4707 12.9881 18.4707 14.1091C18.4707 15.2441 19.4007 16.1741 20.5217 16.1741Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.890625 27.890625"
          className={className}
        >
          <path
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM7.5607 15.9144C8.6407 15.9144 9.5297 15.0254 9.5297 13.9314C9.5297 12.8374 8.6267 11.9494 7.5607 11.9494C6.4667 11.9494 5.5777 12.8374 5.5777 13.9314C5.5777 15.0254 6.4667 15.9144 7.5607 15.9144ZM13.9317 15.9144C15.0257 15.9144 15.9137 15.0254 15.9137 13.9314C15.9137 12.8374 15.0257 11.9494 13.9317 11.9494C12.8377 11.9494 11.9487 12.8374 11.9487 13.9314C11.9487 15.0254 12.8377 15.9144 13.9317 15.9144ZM20.3167 15.9144C21.3967 15.9144 22.2987 15.0254 22.2987 13.9314C22.2987 12.8374 21.3967 11.9494 20.3167 11.9494C19.2227 11.9494 18.3337 12.8374 18.3337 13.9314C18.3337 15.0254 19.2227 15.9144 20.3167 15.9144Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.51953125 28.51953125"
          className={className}
        >
          <path
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM7.8067 16.3649C8.9687 16.3649 9.9257 15.4079 9.9257 14.2459C9.9257 13.0979 8.9687 12.1409 7.8067 12.1409C6.6447 12.1409 5.7007 13.0979 5.7007 14.2459C5.7007 15.4079 6.6447 16.3649 7.8067 16.3649ZM14.2457 16.3649C15.4077 16.3649 16.3657 15.4079 16.3657 14.2459C16.3657 13.0979 15.4077 12.1409 14.2457 12.1409C13.0837 12.1409 12.1407 13.0979 12.1407 14.2459C12.1407 15.4079 13.0837 16.3649 14.2457 16.3649ZM20.6857 16.3649C21.8477 16.3649 22.7907 15.4079 22.7907 14.2459C22.7907 13.0979 21.8477 12.1409 20.6857 12.1409C19.5237 12.1409 18.5797 13.0979 18.5797 14.2459C18.5797 15.4079 19.5237 16.3649 20.6857 16.3649Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.810546875 26.810546875"
          className={className}
        >
          <path
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM7.2047 15.0392C8.1207 15.0392 8.8597 14.3012 8.8597 13.3852C8.8597 12.4692 8.1207 11.7302 7.2047 11.7302C6.2757 11.7302 5.5367 12.4692 5.5367 13.3852C5.5367 14.3012 6.2757 15.0392 7.2047 15.0392ZM13.3987 15.0392C14.3277 15.0392 15.0667 14.3012 15.0667 13.3852C15.0667 12.4692 14.3277 11.7302 13.3987 11.7302C12.4827 11.7302 11.7437 12.4692 11.7437 13.3852C11.7437 14.3012 12.4827 15.0392 13.3987 15.0392ZM19.6057 15.0392C20.5347 15.0392 21.2737 14.3012 21.2737 13.3852C21.2737 12.4692 20.5347 11.7302 19.6057 11.7302C18.6897 11.7302 17.9507 12.4692 17.9507 13.3852C17.9507 14.3012 18.6897 15.0392 19.6057 15.0392Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.49609375 26.49609375"
          className={className}
        >
          <path
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM7.0957 14.7791C7.9567 14.7791 8.6547 14.0821 8.6547 13.2071C8.6547 12.3461 7.9567 11.6481 7.0957 11.6481C6.2207 11.6481 5.5367 12.3461 5.5367 13.2071C5.5367 14.0821 6.2207 14.7791 7.0957 14.7791ZM13.2477 14.7791C14.1227 14.7791 14.8207 14.0821 14.8207 13.2071C14.8207 12.3461 14.1227 11.6481 13.2477 11.6481C12.3867 11.6481 11.6897 12.3461 11.6897 13.2071C11.6897 14.0821 12.3867 14.7791 13.2477 14.7791ZM19.4007 14.7791C20.2757 14.7791 20.9727 14.0821 20.9727 13.2071C20.9727 12.3461 20.2757 11.6481 19.4007 11.6481C18.5387 11.6481 17.8417 12.3461 17.8417 13.2071C17.8417 14.0821 18.5387 14.7791 19.4007 14.7791Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
