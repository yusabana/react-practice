import Rakuten from '../lib/Rakuten'

const RAKUTEN_APP_ID = '1030917990053491604'

// datumType は Google API の場合世界測地系となり単位は度
// https://webservice.rakuten.co.jp/api/simplehotelsearch/
// eslint-disable-next-line import/prefer-default-export
export const searchHotelByLocation = location => {
  const params = {
    applicationId: RAKUTEN_APP_ID,
    datumType: 1,
    latitude: location.lat,
    longitude: location.lng,
  }

  return Rakuten.Travel.simpleHotelSearch(params).then(result => {
    console.log(result)
    return result.data.hotels.map(hotel => {
      const basicInfo = hotel.hotel[0].hotelBasicInfo
      const price = basicInfo.hotelMinCharge ? `${basicInfo.hotelMinCharge}円` : '空室なし'
      return {
        id: basicInfo.hotelNo,
        name: basicInfo.hotelName,
        url: basicInfo.hotelInformationUrl,
        thumbUrl: basicInfo.hotelThumbnailUrl,
        price,
        reviewAverage: basicInfo.reviewAverage,
        reviewCount: basicInfo.reviewCount,
      }
    })
  })
}
