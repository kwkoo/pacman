# pacman
Pac-Man

This is forked from [jnpacker/pacman](https://github.com/jnpacker/pacman). It relies on information injected by the [pod-watcher-controller](https://github.com/kwkoo/pod-watcher-controller) instead of querying cloud APIs.

To run this on OpenShift,

1. Deploy the pod-watcher-controller by running `scripts/deploy-controller`

1. Deploy pacman by running `scripts/deploy-pacman`
