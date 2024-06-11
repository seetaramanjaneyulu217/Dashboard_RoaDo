import React from 'react'

const ActivitiesCard = ({ activity, index, length }) => {
  return (
    <div className={`border border-[#CBCBCB] ${index === 0 ? 'rounded-t-md' : ''} ${index === length - 1 ? 'rounded-b-md' : ''} font-roboto font-normal text-xs p-4`}>
        {activity.content}
    </div>
  )
}

export default ActivitiesCard