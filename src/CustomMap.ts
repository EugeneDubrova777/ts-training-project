export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(mapDivId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(mapDivId)!, {
      zoom: 3,
      center: {
        lat: 0,
        lng: 0,
      },
      backgroundColor: 'black',
    });
  }
}
