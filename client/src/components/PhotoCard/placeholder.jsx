import React from 'react'
import ReactPlaceholder from 'react-placeholder'
import {
  TextBlock,
  RectShape,
  RoundShape
} from 'react-placeholder/lib/placeholders'

export const PlaceholderPhotoCard = ({ children, loading }) => {

  const photoCardSkeleton = (
    <React.Fragment>
      <RectShape color="#eee" style={{ height: '400px', marginBottom: 10 }} />
      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <RoundShape
          color="#eee"
          style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }}
        />
        <TextBlock color="#eee" rows={1} style={{ width: 120 }} />
      </div>
    </React.Fragment>
  )

  return (
    <>
      <ReactPlaceholder
        ready={!loading}
        showLoadingAnimation={true}
        customPlaceholder={photoCardSkeleton}
      >
        {children}
      </ReactPlaceholder>
    </>
  )
}
