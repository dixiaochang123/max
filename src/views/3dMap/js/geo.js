export function geo(features) {
  return {
    search: function(lat, lng) {
      let match = false

      let country, coords

      for (let i = 0; i < features.length; i++) {
        country = features[i]
        if (country.geometry.type === 'Polygon') {
          match = pointInPolygon(country.geometry.coordinates[0], [lng, lat])
          if (match) {
            return {
              code: features[i].id
            }
          }
        } else if (country.geometry.type === 'MultiPolygon') {
          coords = country.geometry.coordinates
          for (let j = 0; j < coords.length; j++) {
            match = pointInPolygon(coords[j][0], [lng, lat])
            if (match) {
              return {
                code: features[i].id
              }
            }
          }
        }
      }

      return null
    }
  }
}

var pointInPolygon = function(poly, point) {
  let x = point[0]
  let y = point[1]

  let inside = false
  let xi
  let xj
  let yi
  let yj
  let xk

  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    xi = poly[i][0]
    yi = poly[i][1]
    xj = poly[j][0]
    yj = poly[j][1]

    xk = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi
    if (xk) {
      inside = !inside
    }
  }

  return inside
}
