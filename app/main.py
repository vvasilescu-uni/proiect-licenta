import tensorflow as tf
type = 'GPU'
devices = tf.config.list_physical_devices(type)
print(f"Num {type}s Available: {len(devices)}")
print(devices)
