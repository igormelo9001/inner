export class PinchableBox {
    _baseScale = new Animated.Value(1);
    _pinchScale = new Animated.Value(1);
    _scale = Animated.multiply(this._baseScale, this._pinchScale);
    _lastScale = 1;
    _onPinchGestureEvent = Animated.event(
      [{ nativeEvent: { scale: this._pinchScale } }],
      { useNativeDriver: USE_NATIVE_DRIVER }
    );
  
    _onPinchHandlerStateChange = (event) => {
      if (event.nativeEvent.oldState === State.ACTIVE) {
        this._lastScale *= event.nativeEvent.scale;
        this._baseScale.setValue(this._lastScale);
        this._pinchScale.setValue(1);
      }
    };
  
    render() {
      return (
        <PinchGestureHandler
          onGestureEvent={this._onPinchGestureEvent}
          onHandlerStateChange={this._onPinchHandlerStateChange}>
          <View style={styles.container} collapsable={false}>
            <Animated.Image
              style={[
                styles.pinchableImage,
                {
                  transform: [{ perspective: 200 }, { scale: this._scale }],
                },
              ]}
            />
          </View>
        </PinchGestureHandler>
      );
    }
  }