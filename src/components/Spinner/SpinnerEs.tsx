import { SpinnerCircularFixed } from "spinners-react";

export function SpinnerEs() {
  return (
    <div className="bg-black d-flex justify-content-center align-items-center"
      style={{
        width: '100%', height: '100%', zIndex: 1025,
        position: 'fixed', marginTop: '-80px'
      }}>
      <SpinnerCircularFixed className="text-white" size={"10%"} />
    </div>
  )
}