exports.migrate = function(input) {
  var properties = input.properties;

  if (properties['.properties.networking_poe_ssl_cert']) {
    properties['.properties.networking_poe_ssl_certs'] = {
      value: [
        {
          guid: { value: generateGuid() },
          name: { value: "Certificate" },
          cert_chain: { value: properties['.properties.networking_poe_ssl_cert']['value']['cert_pem'] },
          private_key: { value: properties['.properties.networking_poe_ssl_cert']['value']['private_key_pem'] }
        }
      ]
    };
  }

  return input;
};
