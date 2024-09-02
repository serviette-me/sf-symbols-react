import { IconProps } from "../../types"

export default function HomepodFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.087890625 31.294921875"
          className={className}
        >
          <path
            d="              M12.4827 3.6644C16.3107 3.6644 19.1677 3.0624 19.1677 1.8324C19.1677 0.5884 16.3247 0.0004 12.4827 0.0004C8.7637 0.0004 5.9197 0.5884 5.9197 1.8324C5.9197 3.0624 8.7777 3.6644 12.4827 3.6644ZM12.5507 31.2954C21.2457 31.2954 25.0877 28.1914 25.0877 21.3694V9.9394C25.0877 8.1894 24.8007 6.0154 23.9117 4.5804C23.3787 3.7184 22.2987 3.4314 21.0957 3.9784C18.9357 5.0174 15.9277 5.6054 12.5507 5.6054C9.1597 5.6054 6.1527 5.0174 3.9927 3.9784C2.7887 3.4314 1.7087 3.7184 1.1757 4.5804C0.2867 6.0154 -0.0003 8.1894 -0.0003 9.9394V21.3694C-0.0003 28.1914 3.8417 31.2954 12.5507 31.2954Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.54296875 29.681640625"
          className={className}
        >
          <path
            d="              M11.7437 3.5954C15.4627 3.5954 18.2517 2.9124 18.2517 1.8044C18.2517 0.6704 15.4767 0.0004 11.7437 0.0004C8.0667 0.0004 5.2907 0.6704 5.2907 1.8044C5.2907 2.9124 8.0797 3.5954 11.7437 3.5954ZM11.7717 29.6814C19.8927 29.6814 23.5427 26.7964 23.5427 20.3304V9.4204C23.5427 7.2594 23.0917 5.3044 22.1617 3.9644C21.7387 3.3364 20.9317 3.1714 20.1247 3.6234C18.3887 4.7164 15.1757 5.4964 11.7717 5.4964C8.3677 5.4964 5.1547 4.7164 3.4177 3.6234C2.6117 3.1714 1.8047 3.3364 1.3807 3.9644C0.4517 5.3044 -0.0003 7.2594 -0.0003 9.4204V20.3304C-0.0003 26.7964 3.6507 29.6814 11.7717 29.6814Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.36328125 30.54296875"
          className={className}
        >
          <path
            d="              M12.1267 3.6362C15.9137 3.6362 18.7307 2.9942 18.7307 1.8182C18.7307 0.6292 15.9137 0.0002 12.1267 0.0002C8.4357 0.0002 5.6187 0.6292 5.6187 1.8182C5.6187 2.9942 8.4497 3.6362 12.1267 3.6362ZM12.1817 30.5432C20.6037 30.5432 24.3637 27.5352 24.3637 20.8772V9.6932C24.3637 7.7652 23.9937 5.6872 23.0777 4.2932C22.5997 3.5412 21.6567 3.3082 20.6307 3.8142C18.6757 4.8812 15.5727 5.5512 12.1817 5.5512C8.7907 5.5512 5.6877 4.8812 3.7187 3.8142C2.7067 3.3082 1.7497 3.5412 1.2717 4.2932C0.3687 5.6872 -0.0003 7.7652 -0.0003 9.6932V20.8772C-0.0003 27.5352 3.7597 30.5432 12.1817 30.5432Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.533203125 27.576171875"
          className={className}
        >
          <path
            d="              M10.7597 3.705C14.5197 3.705 17.2267 2.939 17.2267 1.859C17.2267 0.752 14.5197 0 10.7597 0C6.9997 0 4.2927 0.752 4.2927 1.859C4.2927 2.939 6.9997 3.705 10.7597 3.705ZM10.7597 27.576C18.1837 27.576 21.5337 24.992 21.5337 19.031V8.627C21.5337 5.961 20.7127 4.279 19.8247 3.24C19.5097 2.871 19.0317 2.871 18.6897 3.199C17.4727 4.471 14.2867 5.291 10.7597 5.291C7.2327 5.291 4.0607 4.471 2.8437 3.199C2.4887 2.871 2.0237 2.871 1.7087 3.24C0.8207 4.279 -0.0003 5.961 -0.0003 8.627V19.031C-0.0003 24.992 3.3357 27.576 10.7597 27.576Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.544921875 28.65625"
          className={className}
        >
          <path
            d="              M11.2657 3.5405C14.9157 3.5405 17.6507 2.8025 17.6507 1.7775C17.6507 0.7245 14.9297 -0.0005 11.2657 -0.0005C7.6287 -0.0005 4.8947 0.7245 4.8947 1.7775C4.8947 2.8025 7.6287 3.5405 11.2657 3.5405ZM11.2797 28.6565C19.0177 28.6565 22.5447 25.9085 22.5447 19.6735V9.0915C22.5447 6.6715 21.9977 4.8535 21.0407 3.5815C20.6717 3.0895 20.0567 3.0075 19.4957 3.3905C18.0467 4.5115 14.6837 5.4275 11.2797 5.4275C7.8617 5.4275 4.5117 4.5115 3.0487 3.3905C2.5017 3.0075 1.8727 3.0895 1.5177 3.5815C0.5607 4.8535 -0.0003 6.6715 -0.0003 9.0915V19.6735C-0.0003 25.9085 3.5277 28.6565 11.2797 28.6565Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.998046875 28.08203125"
          className={className}
        >
          <path
            d="              M10.9927 3.5134C14.6157 3.5134 17.3227 2.7484 17.3227 1.7634C17.3227 0.7524 14.6157 0.0004 10.9927 0.0004C7.3687 0.0004 4.6757 0.7524 4.6757 1.7634C4.6757 2.7484 7.3687 3.5134 10.9927 3.5134ZM10.9927 28.0824C18.5257 28.0824 21.9977 25.4024 21.9977 19.3044V8.9004C21.9977 6.3304 21.3827 4.5934 20.4117 3.3634C20.0837 2.9534 19.5507 2.9254 19.1547 3.2534C17.8417 4.4024 14.4097 5.3864 10.9927 5.3864C7.5747 5.3864 4.1427 4.4024 2.8437 3.2534C2.4337 2.9254 1.9137 2.9534 1.5857 3.3634C0.6157 4.5934 -0.0003 6.3304 -0.0003 8.9004V19.3044C-0.0003 25.4024 3.4587 28.0824 10.9927 28.0824Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.982421875 29.107421875"
          className={className}
        >
          <path
            d="              M11.4707 3.5683C15.1487 3.5683 17.9097 2.8573 17.9097 1.7913C17.9097 0.7113 15.1617 0.0003 11.4707 0.0003C7.8207 0.0003 5.0727 0.7113 5.0727 1.7913C5.0727 2.8573 7.8207 3.5683 11.4707 3.5683ZM11.4847 29.1073C19.3867 29.1073 22.9827 26.2913 22.9827 19.9613V9.2283C22.9827 6.9183 22.4627 5.0453 21.5197 3.7463C21.1367 3.1993 20.4257 3.0903 19.7697 3.4863C18.1977 4.6073 14.9027 5.4553 11.4847 5.4553C8.0797 5.4553 4.7847 4.6073 3.2127 3.4863C2.5427 3.0903 1.8457 3.1993 1.4627 3.7463C0.5197 5.0453 -0.0003 6.9183 -0.0003 9.2283V19.9613C-0.0003 26.2913 3.5817 29.1073 11.4847 29.1073Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.91796875 26.919921875"
          className={className}
        >
          <path
            d="              M10.4587 3.9652C14.3967 3.9652 17.1037 3.2132 17.1037 1.9822C17.1037 0.7522 14.3967 0.0002 10.4587 0.0002C6.5077 0.0002 3.8147 0.7522 3.8147 1.9822C3.8147 3.2132 6.5077 3.9652 10.4587 3.9652ZM10.4587 26.9202C17.7327 26.9202 20.9177 24.4452 20.9177 18.6762V8.2852C20.9177 5.4962 19.8377 3.8692 19.0447 3.0762C18.7307 2.7892 18.3477 2.8162 18.0747 3.1442C16.9807 4.5522 14.1227 5.1812 10.4587 5.1812C6.7947 5.1812 3.9377 4.5522 2.8437 3.1442C2.5707 2.8162 2.1737 2.7892 1.8727 3.0762C1.0797 3.8692 -0.0003 5.4962 -0.0003 8.2852V18.6762C-0.0003 24.4452 3.1857 26.9202 10.4587 26.9202Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.603515625 26.591796875"
          className={className}
        >
          <path
            d="              M10.2947 4.1018C14.3417 4.1018 17.0487 3.3498 17.0487 2.0508C17.0487 0.7518 14.3417 -0.0002 10.2947 -0.0002C6.2617 -0.0002 3.5547 0.7518 3.5547 2.0508C3.5547 3.3498 6.2617 4.1018 10.2947 4.1018ZM10.2947 26.5918C17.4997 26.5918 20.6037 24.1718 20.6037 18.5118V8.1078C20.6037 5.2498 19.3867 3.6638 18.6347 2.9938C18.3477 2.7348 17.9927 2.7888 17.7597 3.1308C16.7347 4.5938 14.0407 5.1268 10.2947 5.1268C6.5627 5.1268 3.8687 4.5938 2.8437 3.1308C2.5977 2.7888 2.2557 2.7348 1.9547 2.9938C1.2167 3.6638 -0.0003 5.2498 -0.0003 8.1078V18.5118C-0.0003 24.1718 3.1037 26.5918 10.2947 26.5918Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
